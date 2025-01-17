import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { Account } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // Google client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Google client secret
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }: { token: JWT; account: Account; profile?: any }) {
      if (account && profile) {
        token.id = profile.id;
        token.email = profile.email;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
};

export default NextAuth(authOptions);
