'use client';

import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/users'); // Ensure this matches the correct GET endpoint for fetching users
        const data = await res.json();
        setUsers(data); // Set the users to be displayed
      } catch (error) {
        console.error('Error fetching users:', error);
        setMessage('Error fetching users');
      }
    };

    fetchUsers();
  }, []); // Fetch on page load

  const handleAction = async (userId: string, action: 'approve' | 'reject') => {
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        body: JSON.stringify({ userId, action }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setMessage(data.message);

      // Remove the processed user from the list
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error during action:', error);
      setMessage('Error during action');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Admin Dashboard - Approve/Reject Users
        </h1>
        
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user._id} className="bg-gray-100 p-4 mb-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <div className="space-x-4">
                <button
                  onClick={() => handleAction(user._id, 'approve')}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(user._id, 'reject')}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No users to review.</p>
        )}
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
}
