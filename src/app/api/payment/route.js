import Stripe from 'stripe';

// Initialize the Stripe client
const stripe = new Stripe('your-secret-key-here'); // Replace with your Stripe secret key

export async function POST(req) {
  try {
    // Parse the request body
    const { payment_method } = await req.json();

    if (!payment_method) {
      return new Response(
        JSON.stringify({ success: false, message: 'Payment method is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000, // Amount in the smallest currency unit (e.g., cents)
      currency: 'usd',
      payment_method,
      confirmation_method: 'manual',
      confirm: true,
    });

    return new Response(
      JSON.stringify({ success: true, paymentIntent }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Stripe PaymentIntent Error:', error);

    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export const runtime = 'edge'; // Optional: Use 'edge' runtime for performance
