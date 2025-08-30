import type { NextAuthOptions } from "next-auth"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials"
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


