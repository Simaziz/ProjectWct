import NextAuth from "next-auth";

export const authOptions = {
  // No providers are configured, so no authentication methods are enabled
  providers: [], // Empty providers array
  pages: {
    signIn: "/auth/signin", // Custom sign-in page (optional)
  },
};

export default NextAuth(authOptions);