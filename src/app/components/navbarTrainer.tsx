"use client";
// import jwtDecode from "jwt-decode";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo.png";
import { useEffect, useState } from "react";

// Define the User type
interface User {
  name: string;
  email: string;
}

function TraineeNavbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("user");

      // Check if userData exists and is a valid JSON string
      if (userData) {
        try {
          setUser(JSON.parse(userData)); // Set the user data from localStorage
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      }
    }
  }, []);

  return (
    <nav>
      <div className="flex justify-between gap-12 bg-white px-16 py-4 fixed w-full z-50 h-[70px]">
        {/* Logo Section */}
        <div className="flex items-center justify-center">
          <Image src={logo} alt="Company Logo" width={100} height={100} />
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-8 justify-center items-center text-[1.6rem] text-black">
            <li className="hover:text-blue-400">
              <Link href="/trainerHome">Home</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/trainerList">Client List</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/trainerAboutUs">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Profile Section */}
        <div className="gap-2 flex items-center">
          <div className="flex items-center space-x-4 p-4">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* User icon SVG path */}
              </svg>
            </div>
            <div className="flex flex-col">
              <Link href="/pfTrainer">
                <span className="text-lg font-medium text-gray-900 cursor-pointer">
                  {user ? user.name : "Guest"} {/* Display logged-in user's name */}
                </span>
              </Link>
              <span className="text-sm text-gray-600">{user ? user.email : ""}</span> {/* Display user's email */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TraineeNavbar;