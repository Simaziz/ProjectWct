"use client";

import React, { useState, useEffect, FormEvent } from "react"; // Import FormEvent for typing the event
import Image from "next/image";
import Navbar1 from "src/app/components/traineeNavbar"; // Navbar component
import banner from 'public/images/Rectangle 2.png'; // Banner image
import mission from 'public/images/Rectangle 338.png'; // Mission image
import axios from "axios";
import scc from 'public/images/beni.jpg'; // Benefits image
import trainer from 'public/images/Trainer3.png'; // Trainer image

// Define the type for a comment
interface Comment {
  name: string;
  message: string;
  approved: boolean;
}

const Page = () => {
  const [name, setName] = useState(""); // User's name
  const [message, setMessage] = useState(""); // User's comment
  const [comments, setComments] = useState<Comment[]>([]); // Store all comments with type
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Error state with type

  // Fetch comments from the API
  const fetchComments = async () => {
    try {
      const response = await axios.get<Comment[]>("/api/commentsFetch"); // Custom API endpoint
      console.log("Fetched Comments:", response.data); // Log the response to check if comments are coming correctly
      const approvedComments = response.data.filter((comment: Comment) => comment.approved); // Show only approved comments
      setComments(approvedComments);
    } catch (err) {
      console.error("Error fetching comments:", err); // Log the error details for debugging
      setError("Failed to load comments");
    }
  };

  // Handle comment submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Submitting Comment:", { name, message }); // Log payload
      await axios.post("/api/comments", { name, message });
      setName("");
      setMessage("");
      fetchComments();
    } catch (err) {
      console.error("Submission Error:", err); // Log error details
      setError("Failed to submit your comment. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch comments when the page loads
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="text-black">
      <main>
        {/* Banner Section */}
        <Navbar1 />
        <main>
          <section className="relative flex gap-[5rem]">
            <div className="absolute inset-0 h-full w-full">
              <Image
                src={banner} // Use the imported image
                alt="Background"
                layout="fill" // Makes the image cover the container
                objectFit="cover" // Ensures the image covers the container
                priority={true} // Optimizes the image for fast loading
              />
            </div>

            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 text-blue-950">
              <div className="max-w-xl text-right sm:text-left text-white">
                <h1 className="text-2xl font-bold sm:text-6xl">YOGA</h1>
                <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                  Yoga is a holistic practice that originated in ancient India, combining physical postures, breathing techniques, and meditation to promote physical, mental, and spiritual well-being. It’s suitable for all ages and fitness levels, making it a versatile way to enhance overall health.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Mission and Vision Section */}
        <div className="w-full max-w-auto mx-auto py-8 px-6 lg:px-12 bg-gray-50">
          <div className="text-center mb-12">
            <p className="text-blue-950 text-sm font-bold tracking-wide uppercase">
              Yoga Classes
            </p>
            <h2 className="text-blue-950 text-4xl font-bold leading-tight">
              Mission & Vision
            </h2>
            <p className="text-[#667084] text-lg mt-4">
              For Yoga, here are suggestions for the mission and vision statements:
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                className="rounded-lg shadow-md"
                src={mission} // Use the imported mission image
                alt="Yoga Classes"
                width={450} // Set a fixed width
                height={400} // Set a fixed height
              />
            </div>

            <div className="w-full lg:w-1/2">
              <div className="mb-8">
                <h3 className="text-[#141414] text-4xl font-semibold mb-4">
                  Mission
                </h3>
                <p className="text-[#474747] text-base lg:text-lg leading-relaxed">
                  To harmonize the body, mind, and spirit by promoting physical wellness, mental clarity, and inner peace. Yoga seeks to empower individuals with self-awareness and holistic well-being while fostering compassion and unity in communities.
                </p>
              </div>

              <div>
                <h3 className="text-[#141414] text-4xl font-semibold mb-4">
                  Vision
                </h3>
                <p className="text-[#474747] text-base lg:text-lg leading-relaxed">
                  To create a balanced world where yoga is accessible to all, promoting collective health, mindfulness, and sustainable living. Yoga envisions a global community thriving in harmony, connected through self-awareness and shared purpose.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="w-full max-w-auto px-8 py-12 bg-gray-50 mx-auto flex items-center justify-center">
          <div className="w-full max-w-[1227px] flex flex-col lg:flex-row items-center gap-8 relative">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h2 className="text-[#102249] text-[36px] lg:text-[40px] font-semibold leading-tight">
                Benefits of Yoga
              </h2>
              <p className="text-[#474747] text-base lg:text-lg leading-relaxed">
                Yoga improves strength, flexibility, balance, and endurance while promoting mental clarity, focus, and stress relief through mindfulness and breathing. It encourages self-awareness, emotional stability, and personal growth, fostering discipline, patience, and resilience. Yoga offers a holistic approach to wellness, benefiting both body and mind.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                className="rounded-lg shadow-md"
                src={scc} // Replace with the appropriate imported image
                alt="Martial Arts Benefits"
                width={519}
                height={316}
                priority={true}
              />
            </div>
          </div>
        </div>

        {/* Trainer Section */}
        <div className="w-full max-w-auto h-[476px] shadow-md flex justify-center items-center px-6 py-8 mx-auto overflow-hidden bg-gray-50">
          <div className="w-full max-w-[1105px] flex flex-col lg:flex-row items-center gap-8 relative">
            <div className="w-full lg:w-1/3 flex justify-center">
              <Image
                className="w-[303px] h-[360px] rounded-[5px] shadow-md"
                src={trainer}
                alt="Trainer"
                width={303}
                height={360}
              />
            </div>

            <div className="w-full lg:w-2/3 flex flex-col justify-start items-start gap-4">
              <div className="text-[#102249] text-base font-semibold leading-normal">
                Trainer
              </div>
              <div className="text-[#102249] text-[36px] lg:text-[40px] font-semibold leading-tight">
                Anne Smith
              </div>
              <div className="text-[#474747] text-base lg:text-lg leading-relaxed">
                Anne Smith is a yoga instructor specializing in various yoga practices. She focuses on enhancing physical strength, flexibility, balance, and mindfulness, while promoting mental clarity, emotional stability, and stress relief. Through her classes, Anne empowers students to develop self-awareness, cultivate inner peace, and build resilience, encouraging both physical and mental well-being.
              </div>
            </div>
          </div>
        </div>

        {/* Comment Section */}
        <div className="w-full max-w-auto px-6 py-8 mx-auto bg-gray-50">
          <div className="text-center mb-8">
            <h2 className="text-[#102249] text-4xl font-semibold leading-tight">Comments</h2>
            <p className="text-[#667084] text-lg mt-4">
              Share your thoughts or experiences about the Martial Arts classes!
            </p>
          </div>
          {error && <p className="text-red-500">{error}</p>}

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input
                className="w-full p-3 text-lg border border-gray-300 rounded-md"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea
                className="w-full p-3 text-lg border border-gray-300 rounded-md"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white text-lg py-3 rounded-md"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          <div className="bg-gray-100 py-12">
            <div className="max-w-screen-lg mx-auto">
              <h2 className="text-2xl font-semibold mb-6">Comments</h2>
              {error && <p className="text-red-500">{error}</p>}
              <ul>
                {comments.map((comment, index) => (
                  <li
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md mb-4"
                  >
                    <h3 className="font-bold text-lg">{comment.name}</h3>
                    <p className="text-gray-700">{comment.message}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;