import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom sign-in page (optional)
  },
  callbacks: {
    async jwt({ token, account, profile, user }) {
      // This is the correct structure of the JWT callback
      if (account && profile) {
        token.id = profile.id;
        token.email = profile.email;
        token.name = profile.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Add the token data to the session
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      return session;
    },
  },
  secret: process.env.JWT_SECRET, // Optional but recommended
};

export default NextAuth(authOptions);
