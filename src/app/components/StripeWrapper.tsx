'use client';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ReactNode } from "react";

// Load your Stripe public key
const stripePromise = loadStripe("your-stripe-public-key"); // Replace with your actual Stripe public key

interface StripeWrapperProps {
  children: ReactNode;
}

const StripeWrapper = ({ children }: StripeWrapperProps) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeWrapper;
