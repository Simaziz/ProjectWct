"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import logo from "public/images/logoBlack.png";
import Image from "next/image";// Import useRouter

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "An unknown error occurred.");
      } else {
        // Redirect on successful login
        router.push("/home");
      }
    } catch (error) {
      console.error("Error during signin:", error);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="p-[10rem] bg-white">
      <div className="border-b-2  border-black  w-full ">
        <Image src={logo} alt=""></Image>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-white shadow-lg">
      
      <div className="bg-white  rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-600  mb-2">Log In</h1>
        <p className="text-gray-500 mb-6">to get started</p>
        <button className="w-full mb-4 bg-white py-2 rounded text-sm flex shadow-md border-[1px] border-gray-300  text-black items-center justify-center hover:bg-gray-500 hover:text-white">
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google"
        className="h-5 w-5 mr-2"
      />
      Login with Google
    </button>
    <div className="flex items-center justify-center mb-4 text-black ">
    <div className="flex-grow border-t border-gray-300"></div>
  <span className="mx-4 text-gray-500">or Login with Email</span>
  <div className="flex-grow border-t border-gray-300"></div>
    </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 ">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-md  text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-md text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-300"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6 text-gray-500 text-sm">
          Not registered yet?{" "}
          <a href="/signUp" className="text-blue-500 font-medium hover:underline">
            Create an account ↗
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
