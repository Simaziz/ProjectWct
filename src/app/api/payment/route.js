import Stripe from 'stripe';

const stripe = new Stripe('your-secret-key-here');  // Use your secret Stripe API key

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { payment_method } = req.body;

      // Create a PaymentIntent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 5000, // Amount in the smallest currency unit (e.g., cents)
        currency: 'usd',
        payment_method,
        confirmation_method: 'manual',
        confirm: true,
      });

      res.status(200).json({ success: true, paymentIntent });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
