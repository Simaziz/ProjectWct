"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import logo from "public/images/logo.png"; // Replace with your logo

export default function AwaitingApproval() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is logged in
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          setUser(JSON.parse(userData));
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
          <Image src={logo} alt="Company Logo" width={120} height={120} />
          <h1 className="text-2xl font-bold text-gray-800 mt-6">Account Awaiting Approval</h1>
          <p className="text-gray-600 mt-2">Hello, {user ? user.name : "Guest"}! Your account is currently under review by the admin.</p>
          <p className="text-gray-600 mt-4">Please wait while we process your request. You will be notified once your account is approved.</p>

          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
  <Link href="/status">Check Status</Link>
</button>


          <div className="mt-6">
            <p className="text-sm text-gray-500">If you need assistance, please <a href="mailto:support@example.com" className="text-blue-500">contact us</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
