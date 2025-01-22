"use client";
// import jwtDecode from "jwt-decode";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo.png";
import { useEffect, useState } from "react";

function TraineeNavbar() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // Client-side only logic
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("user");

      // Parse user data if it exists
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
        }
      }
    }
  }, []);

  return (
    <nav className="bg-white shadow fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/traineeHomeafterpay">
            <Image
              src={logo}
              alt="GymMotive Logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg font-medium text-gray-700">
          <li className="hover:text-blue-500">
            <Link href="/traineeHome">Home</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/traineeClasses">Classes</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/traineePricing">Pricing</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/traineeOverview">Dashboard</Link>
          </li>
        </ul>

        {/* Profile Section */}
        <div className="flex items-center space-x-6">
          {/* Register for Trainer Button */}
          <Link href="/loginTrainer">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              aria-label="Register as a trainer"
            >
              Register for Trainer
            </button>
          </Link>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-label="User Icon"
              >
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-9 1.7-9 5v3h18v-3c0-3.3-5.7-5-9-5z" />
              </svg>
            </div>
            <Link href="/pfTrainee">
              <span className="text-lg font-medium text-gray-900 cursor-pointer">
                {user?.name || "Guest"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TraineeNavbar;
