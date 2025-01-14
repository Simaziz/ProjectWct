"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("user");

      // Redirect to sign-in if no user data is found
      if (!userData) {
        router.push("/signIn");
        return;
      }

      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user"); // Clear invalid data
        router.push("/signIn");
      }
    }
  }, [router]);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    // Redirect to sign-in page
    router.push("/");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <header className="w-screen h-screen bg-gray-50">
      <div className="flex justify-center items-center">
        <div className="p-8 w-[400px] h-[300px] mt-[10rem]">
          <h1 className="text-2xl font-bold mb-4 text-black">User Information</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-lg text-gray-900">{user.name}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-lg text-gray-900">{user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
