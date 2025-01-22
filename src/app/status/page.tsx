"use client";
import { useState, useEffect } from "react";

// Define the type for the user object
interface User {
  name: string;
  // Add other properties if needed
}

export default function StatusPage() {
  const [status, setStatus] = useState("Loading...");
  const [user, setUser] = useState<User | null>(null); // Explicitly type the user state

  useEffect(() => {
    // Retrieve the user data from localStorage or from API if needed
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("user");

      if (userData) {
        try {
          const parsedUser: User = JSON.parse(userData); // Parse and assert the type
          setUser(parsedUser);
          // Simulate a status check (in a real app, you would call an API here)
          setTimeout(() => {
            // Example logic for pending, approved, or rejected status
            setStatus("Pending approval..."); // You can dynamically set this based on real data
          }, 2000);
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      }
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mt-6">Account Status</h1>
          <p className="text-gray-600 mt-4">
            Hello, {user ? user.name : "Guest"}! Your account status is:
          </p>
          <p className="text-gray-600 mt-4 font-semibold text-lg">{status}</p>

          <div className="mt-6">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Refresh Status
            </button>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500">If you need assistance, please <a href="mailto:support@example.com" className="text-blue-500">contact us</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}