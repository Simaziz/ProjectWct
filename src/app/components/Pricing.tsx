"use client";
import { useRouter } from "next/navigation"; // For routing

export default function PricingC() {
    const router = useRouter(); // Next.js router for navigation

    const handleGetStarted = (planName, price) => {
        // Navigate to the purchaseForm page with query parameters
        router.push(`/creditCard?planName=${encodeURIComponent(planName)}&price=${encodeURIComponent(price)}`);
    };

    return (
        <div className="text-black">
            <div className="bg-gray-50 py-16 px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">Pricing & Packages</h2>
                    <p className="text-gray-600">Select the best plan that fits your needs and start learning today!</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Plan Cards */}
                    {[
                        { name: "Basic Plan", price: 49 },
                        { name: "Beginner Plan", price: 79 },
                        { name: "Premium Plan", price: 109 },
                        { name: "Ultimate Plan", price: 149 },
                    ].map((plan) => (
                        <div key={plan.name} className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                            <p className="text-4xl font-extrabold text-blue-900 mb-4">${plan.price}</p>
                            <ul className="text-gray-600 mb-6 space-y-2">
                                <li>Personal Trainer</li>
                                <li>Convenient Time</li>
                                <li>Special Class</li>
                                <li>Group Training</li>
                                <li>Free Fitness Training</li>
                            </ul>
                            <button
                                onClick={() => handleGetStarted(plan.name, plan.price)}
                                className="px-6 py-2 text-blue-900 font-semibold border border-blue-300 rounded-lg hover:bg-blue-100"
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
