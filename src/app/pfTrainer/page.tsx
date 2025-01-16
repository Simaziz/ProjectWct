"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // If no user data is found, redirect to login
      router.push("/loginTrainer");
    }
  }, [router]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 text-black">
      <div className="p-8 bg-white shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <div>
          <p className="mb-2"><strong>Name:</strong> {user.name}</p>
          <p className="mb-2"><strong>Email:</strong> {user.email}</p>
          <p className="mb-2"><strong>Status:</strong> {user.status}</p>
          {/* Add any other user information you want */}
        </div>
      </div>
    </div>
  );
}
