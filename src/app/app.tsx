// src/pages/_app.tsx or src/app/layout.tsx (depending on your Next.js setup)

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AppProps } from "next/app";

// Your Stripe public key (make sure this is your actual key)
const stripePromise = loadStripe("your-public-key-here");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Elements stripe={stripePromise}>
      <Component {...pageProps} />
    </Elements>
  );
}

export default MyApp;
