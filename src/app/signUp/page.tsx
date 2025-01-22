"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "public/images/logoBlack.png";
import google from "public/images/Google.webp";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [response, setResponse] = useState({ message: "", color: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setResponse({ message: "All fields are required.", color: "red" });
      return;
    }

    setLoading(true);
    setResponse({ message: "", color: "" }); // Clear previous messages

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        const userId = result.user._id; // Ensure backend returns `user._id`
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        setResponse({ message: "Signup successful! Redirecting...", color: "green" });

        router.push(`/traineeHome/${userId}`); // Redirect to dynamic route
      } else {
        setResponse({ message: result.message || "Signup failed.", color: "red" });
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      setResponse({ message: "Server error. Please try again later.", color: "red" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-[5rem] w-screen text-black">
      <div className="mt-[2rem]">
        <div className="border-b-2 border-black w-full">
          <Image src={logo} alt="Logo" />
        </div>
        <div className="flex justify-center shadow-md">
          <div className="bg-white p-8 rounded w-[455px] mt-[1rem]">
            <h2 className="text-[2rem] font-bold mb-4 text-blue-700">Sign Up</h2>
            <p className="text-gray-500 mb-6">to get started</p>

            {/* Placeholder for Google Login */}
            <button className="w-full mb-4 bg-white py-2 rounded text-sm flex shadow-md border-[1px] border-gray-100 text-black items-center justify-center hover:bg-gray-500 hover:text-white">
              <Image src={google} alt="Google" className="h-5 w-auto mr-2" />
              Login with Google
            </button>

            <div className="flex items-center justify-center mb-4 text-black">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">or Sign up with Email</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Sign-up Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="mt-1 p-2 w-full border-gray-100 border rounded shadow-md text-black"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="mt-1 p-2 w-full border-gray-100 border rounded shadow-md"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="mt-1 p-2 w-full border-gray-100 border rounded shadow-md text-black"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
              <button
                type="submit"
                className={`w-full py-2 rounded font-medium ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-900 hover:bg-blue-300"
                } text-white`}
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign up"}
              </button>
            </form>

            {/* Display the message with dynamic color */}
            {response.message && (
              <p className="mt-4 text-center text-sm" style={{ color: response.color }}>
                {response.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
