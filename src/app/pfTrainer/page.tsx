'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Define the type for the user object
interface User {
  name: string;
  email: string;
  status: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null); // Explicitly type the user state
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/loginTrainer'); // Redirect if no token
        return;
      }

      try {
        const res = await fetch('/api/pfTrainer', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const { message } = await res.json();
          console.error('Error fetching profile:', message);
          router.push('/loginTrainer'); // Redirect if unauthorized or error
          return;
        }

        const { user } = await res.json();
        setUser(user);
      } catch (error) {
        console.error('Error fetching profile:', error);
        router.push('/loginTrainer');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null; // Or some fallback UI
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 py-8 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Your Profile</h1>
          <div className="w-full space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-600"><strong>Name:</strong> {user.name}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-600"><strong>Status:</strong> {user.status}</p>
            </div>

            {/* Optionally, add any other user information you want */}
          </div>

          <button
            onClick={() => router.push('/dashboard')} // Example: redirect to dashboard
            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Go to Dashboard
          </button>
          
        </div>
      </div>
    </div>
  );
}