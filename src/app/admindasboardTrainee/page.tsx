"use client"; // Add this for client-side rendering if needed

import { useEffect, useState } from "react";
import Sidebar from "src/app/components/SidebarAdmin";

// Define the User type
interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const AdminPage = () => {
  const [users, setUsers] = useState<User[]>([]);  // Use the User type
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "trainee",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null); // Reset any previous errors
      try {
        const res = await fetch("/api/admin/users");
        if (res.ok) {
          const data = await res.json();
          setUsers(data.data); // Assuming data comes back in a "data" field
        } else {
          setError("Failed to fetch users.");
        }
      } catch (error) {
        setError("Error fetching users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    setError(null); // Reset any previous errors

    const res = await fetch("/api/admin/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const user = await res.json();
      setUsers((prevUsers) => [...prevUsers, user.data]);
      setNewUser({ name: "", email: "", password: "", role: "trainee" });
    } else {
      setError("Failed to create user.");
    }
    setCreating(false);
  };

  const handleDelete = async (id: string) => {
    console.log("Attempting to delete user with ID:", id);  // Log the ID
    try {
      const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
      if (res.ok) {
        console.log("User deleted successfully");
        // Remove the deleted user from the state
        setUsers(users.filter((user) => user._id !== id));
      } else {
        const errorData = await res.json();
        console.error("Error deleting user:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <header className="flex bg-gray-100 gap-[3rem]">
      <Sidebar />
      <div className="p-6 bg-gray-100 min-h-screen text-black">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
          Admin Dashboard
        </h1>

        {/* Add User Form */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Create New User</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              placeholder="Name"
              className="w-full p-3 border rounded"
            />
            <input
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              placeholder="Email"
              className="w-full p-3 border rounded"
            />
            <input
              type="password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              placeholder="Password"
              className="w-full p-3 border rounded"
            />
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="w-full p-3 border rounded"
            >
              <option value="trainee">Trainee</option>
              <option value="trainer">Trainer</option>
              {/* Add other roles as needed */}
            </select>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded"
              disabled={creating}
            >
              {creating ? "Creating..." : "Create User"}
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-center mb-4">{error}</div>
        )}

        {/* User List */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">User List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-4">Name</th>
                  <th className="border-b p-4">Email</th>
                  <th className="border-b p-4">Role</th>
                  <th className="border-b p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="border-b p-4">{user.name}</td>
                    <td className="border-b p-4">{user.email}</td>
                    <td className="border-b p-4">{user.role}</td>
                    <td className="border-b p-4">
                      <button
                        onClick={() => handleDelete(user._id)}  // Attach handler to the button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminPage;