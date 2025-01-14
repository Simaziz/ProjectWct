"use client";
import { useRouter, useSearchParams } from "next/navigation"; // Use query parameters
import { useState } from "react";

export default function PurchaseForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Extract plan details from query parameters
    const planName = searchParams.get("planName") || "";
    const price = searchParams.get("price") || 0;

    const [name, setName] = useState("");
    const [traineeId, setTraineeId] = useState("");
    const [loading, setLoading] = useState(false);

    const handlePurchase = async (e) => {
        e.preventDefault();
        setLoading(true);

        const purchaseData = {
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
            alert("Purchase failed: " + error.message);
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
}
