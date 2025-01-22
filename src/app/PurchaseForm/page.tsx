"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense, FormEvent } from "react"; // Import FormEvent for typing the event

// Define the type for the purchase data
interface PurchaseData {
  name: string;
  traineeId: string;
  trainingId: string;
  paymentMethod: string;
  price: number;
}

export default function PurchaseForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const SuspendedForm = () => {
    const searchParams = useSearchParams();

    // Extract plan details from query parameters
    const planName = searchParams.get("planName") || "";
    const price = parseFloat(searchParams.get("price") || "0"); // Convert price to number

    const [name, setName] = useState("");
    const [traineeId, setTraineeId] = useState("");

    const handlePurchase = async (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);

      const purchaseData: PurchaseData = {
        name,
        traineeId,
        trainingId: planName,
        paymentMethod: "online",
        price,
      };

      try {
        const response = await fetch("/api/purchase", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(purchaseData),
        });

        const data = await response.json();
        if (response.ok) {
          alert("Purchase successful!");
          router.push("/thank-you"); // Redirect to thank-you page
        } else {
          alert("Purchase failed: " + (data.error || "Unknown error"));
        }
      } catch (error) {
        console.error("Error in handlePurchase:", error);
        alert("Purchase failed: An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">Purchase {planName}</h2>
          <p className="text-center text-gray-600 mb-6">Price: ${price}</p>
          <form onSubmit={handlePurchase}>
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Trainee ID:</label>
              <input
                type="text"
                value={traineeId}
                onChange={(e) => setTraineeId(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Processing..." : "Confirm Purchase"}
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuspendedForm />
    </Suspense>
  );
}