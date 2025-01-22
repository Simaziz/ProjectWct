import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not yet loaded.
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { token, error } = await stripe.createToken(cardElement);

      if (error) {
        console.error(error);
      } else {
        console.log("Received Stripe Token:", token);
        // You can now send the token to your backend for processing
      }
    } else {
      console.error("Card element not found.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;