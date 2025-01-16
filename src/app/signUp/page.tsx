"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Image from "next/image";
import logo from "public/images/logoBlack.png";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [response, setResponse] = useState({ message: "", color: "" });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.password) {
      setResponse({ message: "All fields are required.", color: "red" });
      return;
    }
  
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
  
      setResponse({ message: result.message, color: result.color || "black" });
  
      if (res.ok) {
        // Store the token and user data in localStorage
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user)); // Store user data
        console.log("User data stored in localStorage:", result.user); // Debugging
        router.push("/traineeHome"); // Redirect to the home page
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      setResponse({ message: "Server error. Please try again later.", color: "red" });
    }
  };

  return (
    <div className="bg-white p-[5rem] w-screen">
      <div className="mt-[2rem]">
        <div className="">
          <div className="border-b-2 border-black w-full">
            <Image src={logo} alt=""></Image>
          </div>
          <div className="flex justify-center shadow-md">
            <div className="bg-white p-8 rounded w-[455px] mt-[1rem]">
              <h2 className="text-[2rem] font-bold mb-4 text-blue-700">Sign Up</h2>
              <p className="text-gray-500 mb-6">to get started</p>
              <button className="w-full mb-4 bg-white py-2 rounded text-sm flex shadow-md border-[1px] border-gray-100 text-black items-center justify-center hover:bg-gray-500 hover:text-white">
                <Image
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  className="h-5 w-5 mr-2"
                />
                Login with Google
              </button>
              <div className="flex items-center justify-center mb-4 text-black">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">or Login with Email</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="mt-1 p-2 w-full border-gray-100 border rounded shadow-md text-black"
                    onChange={handleChange}
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
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-2 rounded font-medium hover:bg-blue-300"
                >
                  Sign up
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
    </div>
  );
}