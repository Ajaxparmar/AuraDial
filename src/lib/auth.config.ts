import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import jwt from "jsonwebtoken";
export default {
  providers: [
    Google,
    Facebook,
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        jwt: { type: 'text' },
      },
      async authorize(credentials, req) {
        console.log('authorize', credentials)
        if(credentials.jwt && process.env.AUTH_SECRET){
          const jwtStr = credentials.jwt as string;
          const decoded =  jwt.verify(jwtStr, process.env.AUTH_SECRET) as { user: { sub: string, name: string, email: string } };
          console.log('decoded', decoded)
          if(decoded && 'user' in decoded && decoded.user){
            return {
              id: decoded.user.sub,
              name: decoded.user.name,
              email: decoded.user.email,
            }
          }
        }
        return null
      }
    })
  ],
} satisfies NextAuthConfig;


import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Invalid email or password");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};