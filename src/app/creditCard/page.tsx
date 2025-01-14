"use client";
import { useRouter } from "next/navigation"; // For routing
import { useEffect, useState } from "react";
import Image from "next/image";
import Visa from "public/images/Visa.png";
import MasterCard from "public/images/MasterCard.png";


const CreditCardPage = () => {
  const router = useRouter();
  const [planName, setPlanName] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardType, setCardType] = useState<string>(""); // Store the card type (Visa, MasterCard, etc.)

  // Get query parameters when the page loads
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setPlanName(urlParams.get('planName'));
    setPrice(urlParams.get('price'));
  }, []);

  // Function to detect card type based on the number
  const detectCardType = (number: string) => {
    const visa = /^4/;
    const mastercard = /^5[1-5]/;
    const amex = /^3[47]/;
    const discover = /^6/;

    if (visa.test(number)) {
      return "visa";
    } else if (mastercard.test(number)) {
      return "mastercard";
    } else if (amex.test(number)) {
      return "amex";
    } else if (discover.test(number)) {
      return "discover";
    }
    return "";
  };

  // Update card number and type
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setCardNumber(value);
    setCardType(detectCardType(value)); // Detect the card type
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // You can perform form validation here if needed

    // For example, redirect to a success page
    router.push(`/traineeHomeafterpay?plan=${planName}&price=${price}`);
  };

  if (!planName || !price) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="text-black">
      <div className="bg-gray-50 py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Payment Details</h2>
          <p className="text-gray-600">
            You are about to subscribe to the <strong>{planName}</strong> plan for{" "}
            <strong>${price}</strong>.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6">Enter Your Payment Information</h3>

          <form onSubmit={handleSubmit}>
            {/* Card Model Display */}
            <div className="mb-6 text-center">
              <div className="w-full p-2 border rounded-md">
                <div className="flex justify-center items-center">
                  {/* Display Card Logo */}
                  {cardType === "visa" && (
                    <Image src={Visa} alt="Visa" className="h-[40px] w-[80px]" />
                  )}
                  {cardType === "mastercard" && (
                    <Image src={MasterCard} alt="MasterCard" className=" h-[40px] w-[80px]" />
                  )}
                  {cardType === "amex" && (
                    <Image src="/amex-logo.png" alt="American Express" className="h-8" />
                  )}
                  {cardType === "discover" && (
                    <Image src="/discover-logo.png" alt="Discover" className="h-8" />
                  )}
                  {!cardType && <span>Card Type</span>}
                </div>
              </div>
            </div>

            {/* Card Number */}
            <div className="mb-6">
              <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-600">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full p-3 mt-2 border rounded-md"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </div>

            {/* Expiry Date (MM/YY) */}
            <div className="flex mb-6 space-x-4">
              <div className="w-1/2">
                <label htmlFor="expiryMonth" className="block text-sm font-semibold text-gray-600">
                  Expiry Month (MM)
                </label>
                <input
                  type="text"
                  id="expiryMonth"
                  className="w-full p-3 mt-2 border rounded-md"
                  placeholder="MM"
                  maxLength={2}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="expiryYear" className="block text-sm font-semibold text-gray-600">
                  Expiry Year (YY)
                </label>
                <input
                  type="text"
                  id="expiryYear"
                  className="w-full p-3 mt-2 border rounded-md"
                  placeholder="YY"
                  maxLength={2}
                />
              </div>
            </div>

            {/* CVV */}
            <div className="mb-6">
              <label htmlFor="cvv" className="block text-sm font-semibold text-gray-600">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="w-full p-3 mt-2 border rounded-md"
                placeholder="123"
                maxLength={3}
              />
            </div>

            {/* Postal Code */}
            <div className="mb-6">
              <label htmlFor="postalCode" className="block text-sm font-semibold text-gray-600">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                className="w-full p-3 mt-2 border rounded-md"
                placeholder="12345"
                maxLength={5}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-900 text-white font-semibold rounded-lg"
            >
              Pay ${price}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPage;
