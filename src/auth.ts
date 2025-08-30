import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import authConfig from "./auth.config";
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/",
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn", user, account, profile, email, credentials);
      if (user && user.name && user.id) {
        const existingProfile = await prisma.profile.findFirst({
          where: { userId: user.id },
        });
        if (!existingProfile) {
          await prisma.profile.createMany({
            data: { userId: user.id, name: user.name, picture: user.image },
          });
          return true;
        }
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      return "/user/home";
      // return baseUrl // old version of code PS
    },
    async jwt({ token, user, trigger }) {
      if (trigger === "signIn") {
        const dbUser = await prisma.user.findUnique({
          where: {
            id: user.id,
          },
        });
        token.id = dbUser?.id;
        token.isAdmin = dbUser?.isAdmin;
        token.role = dbUser?.role;
      }
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.sub) session.user.id = token.sub;

      session.isAdmin = token.isAdmin as boolean;
      session.role = token.role as string; // Add role to session
      return session;
    },
  },
  ...authConfig,
});
