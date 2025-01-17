import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // Google client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Google client secret
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.id = profile.id;
        token.email = profile.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
};

export default NextAuth(authOptions);
