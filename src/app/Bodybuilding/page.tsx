"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import banner from "public/images/bpdy.png";
import mission from "public/images/mission1.png";

const Page = () => {
  const [traineeName, setTraineeName] = useState("");
  const [traineeComment, setTraineeComment] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]); // State for comments

  // Fetch comments from the backend
  const fetchComments = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/comments");
      setComments(response.data.comments); // Assuming the backend returns a `comments` array
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  // Fetch comments when the page loads
  useEffect(() => {
    fetchComments();
  }, []);

  // Rating handler function
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Comment submit handler function
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/comments", {
        traineeName,
        traineeComment,
        rating,
      });

      setMessage(response.data.message);
      setTraineeName("");
      setTraineeComment("");
      setRating(0);

      // Fetch the updated comments after submission
      fetchComments();
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to submit your comment. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Main Section */}
      <section className="relative">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={banner}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 text-white">
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold sm:text-6xl">Bodybuilding</h1>
            <p className="mt-4 max-w-lg sm:text-xl">
              Bodybuilding is the practice of building muscle mass and strength
              through weightlifting and proper nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Trainee Comment Section */}
      <div className="w-full max-w-4xl mx-auto py-8 px-6 lg:px-12 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-blue-950 text-4xl font-bold leading-tight">
            Leave Your Comment and Rating
          </h2>
          <p className="text-[#667084] text-lg mt-4">
            Share your thoughts on bodybuilding and rate the training program!
          </p>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="w-full max-w-md mx-auto space-y-4">
          <div>
            <label className="block text-[#141414] font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-[#bdbdbd] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#102249]"
              placeholder="Enter your name"
              value={traineeName}
              onChange={(e) => setTraineeName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-[#141414] font-semibold mb-2">
              Your Comment
            </label>
            <textarea
              className="w-full p-3 border border-[#bdbdbd] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#102249]"
              placeholder="Write your comment"
              value={traineeComment}
              onChange={(e) => setTraineeComment(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-[#141414] font-semibold mb-2">
              Rate the Program
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={star <= rating ? "gold" : "gray"}
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="cursor-pointer"
                  onClick={() => handleRatingChange(star)}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#102249] text-white py-3 rounded-md hover:bg-[#1F3A59] transition duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Comment and Rating"}
          </button>
        </form>

        {/* Success/Error Message */}
        {message && (
          <p
            className={`mt-4 ${
              message.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* Display Comments */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-[#102249]">Recent Comments</h3>
          <ul className="space-y-4 mt-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="p-4 border border-gray-300 rounded-lg bg-white shadow"
              >
                <p className="font-semibold text-[#102249]">
                  {comment.traineeName} rated {comment.rating} stars
                </p>
                <p className="text-gray-700 mt-2">{comment.traineeComment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
