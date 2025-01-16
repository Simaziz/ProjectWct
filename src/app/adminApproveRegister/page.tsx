"use client";
import Navbar from "src/app/components/navbarMylearning";
import { useState, useEffect } from "react";
import Sidebar from "src/app/components/SidebarAdmin";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchPendingUsers = async () => {
      const response = await fetch("/api/admin/users");
      const data = await response.json();
      setUsers(data.users || []);
    };

    fetchPendingUsers();
  }, []);

  const handleAction = async (id, action) => {
    try {
      const response = await fetch(`/api/admin/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });

      const result = await response.json();
      setMessage(result.message);

      // Refresh the user list
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error updating user:", error);
      setMessage("An error occurred.");
    }
  };

  return (
   <div>
    <Navbar />
    <header className="flex">
    <Sidebar />
    <div className="min-h-screen  p-6 ">
      {/* Admin Panel Header */}
      <div className="bg-blue-600 text-white py-4 px-6 rounded-lg mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
      </div>

      {/* Notification Message */}
      {message && (
        <div
          className={`p-4 mb-6 rounded-md text-center ${
            message.includes("error") ? "bg-red-500 text-white" : "bg-green-500 text-white"
          }`}
        >
          {message}
        </div>
      )}

      {/* User List Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b text-black">
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4 flex space-x-4">
                  <button
                    onClick={() => handleAction(user._id, "approve")}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleAction(user._id, "reject")}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </header>
   </div>
  );
};

export default AdminPanel;
