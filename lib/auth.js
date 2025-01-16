import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Other providers can be added here
  ],
  session: {
    strategy: "jwt", // You can configure it to use JWT tokens
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token.user; // You can add additional info to session if needed
      return session;
    },
  },
};

export default NextAuth(authOptions);
