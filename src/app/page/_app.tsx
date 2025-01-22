import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app"; // Import AppProps from Next.js
import { Session } from "next-auth"; // Import Session type from NextAuth.js

// Extend AppProps to include the session prop
type CustomAppProps = AppProps & {
  pageProps: {
    session?: Session;
  };
};

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;