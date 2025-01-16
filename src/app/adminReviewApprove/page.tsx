"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "src/app/components/SidebarAdmin";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setStatus(parsedUser.status || "pending"); // Set status dynamically based on user data
    } else {
      router.push("/login");
    }
  }, [router]); // Add `router` to the dependency array

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <header className="flex">
      <Sidebar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full">
        {/* Dashboard Header */}
        <div className="w-full bg-blue-600 py-6 text-center text-white text-3xl font-semibold">
          Welcome to your Dashboard
        </div>

        {/* Main Dashboard Container */}
        <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg mt-6">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold mb-4">{user.name}</h1>

            <div className="mb-6">
              <p className="text-xl text-gray-700">Your Account Status</p>
              <div
                className={`mt-2 p-4 rounded-lg text-center text-white font-semibold ${
                  status === "approved" ? "bg-green-500" : "bg-yellow-500"
                }`}
              >
                {status === "approved" ? "Approved" : "Pending / Rejected"}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-6">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Edit Profile
              </button>
              <button
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                onClick={() => {
                  localStorage.removeItem("user");
                  router.push("/login");
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Dashboard;