"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentsPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all approved comments
  const fetchComments = async () => {
    try {
      const response = await axios.get("/api/comments");
      const approvedComments = response.data.filter((comment) => comment.approved);
      setComments(approvedComments);
    } catch (err) {
      console.error("Failed to load comments:", err);
      setError("Failed to load comments.");
    }
  };

  // Submit a new comment
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("/api/comments", { name, message });
      setName("");
      setMessage("");
      fetchComments();
    } catch (err) {
      console.error("Failed to submit comment:", err);
      setError("Failed to submit comment.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="message">
            Comment
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Submitting..." : "Submit Comment"}
        </button>
      </form>

      {/* Comments List */}
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id} className="mb-4 border-b pb-4">
              <p>
                <strong>{comment.name}</strong>: {comment.message}
              </p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentsPage;
