import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { Account, Profile } from "next-auth";

// Validate environment variables
const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("Google OAuth environment variables are not set.");
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }: { token: JWT; account: Account | null; profile?: Profile }) {
      // Only update the token if account and profile are defined
      if (account && profile) {
        token.id = profile.sub; // Use `sub` instead of `id` for Google profiles
        token.email = profile.email;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      // Add the token data to the session
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
};

export default NextAuth(authOptions);