"use client";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo.png";
import { useEffect, useState } from "react";

function TraineeNavbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("user");

      // Check if userData exists and is a valid JSON string
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
    <nav>
      <div className="flex justify-between gap-12 bg-white px-16 py-4 fixed w-full z-50 h-[70px]">
        {/* Logo Section */}
        <div className="flex items-center justify-center">
          <Image src={logo} alt="Company Logo" width={100} height={100} />
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-8 justify-center items-center text-[1.6rem]   text-black ">
            <li className="hover:text-blue-400 ">
              <Link href="/traineeHomeafterpay">Home</Link>
            </li>
            <li className="hover:text-blue-400 ">
              <Link href="/TraineeClassesAfterpay">Classes</Link>
            </li>
            {/* <li className="hover:text-blue-400 ">
              <Link href="/traineePricing">Pricing</Link>
            </li> */}
                 <li className="hover:text-blue-400 ">
              <Link href="/traineePricing">Pricing</Link>
            </li>
            <li className="hover:text-blue-400 ">
              <Link href="/traineeOverview">Dashboard</Link>
            </li>
       
          </ul>
        </div>

        {/* Profile Section */}
        {/* <div className="flex items-center space-x-4 p-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-9 1.7-9 5v3h18v-3c0-3.3-5.7-5-9-5z" />
            </svg>
          </div>
          <span className="text-lg font-medium text-gray-900">Sardor</span>
        </div> */}
       <div className="gap-2 flex">
           <Link href="/loginTrainer">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Register for trainer
              </button>
            </Link>
        <div className="flex items-center space-x-4 p-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              {/* User icon SVG path */}
            </svg>
          </div>
      
          <Link href="/pfTrainee">
            <span className="text-lg font-medium text-gray-900 cursor-pointer">
              {user ? user.name : 'Guest'}
            </span>
          </Link>
        </div>
           </div>
      </div>
    </nav>
  );
}

export default TraineeNavbar;
