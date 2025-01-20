"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "src/app/components/SidebarAdmin";

const ManageComments = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  // Fetch pending comments
  const fetchPendingComments = async () => {
    try {
      const response = await axios.get("/api/commentsFetch"); // Fetch all comments
      const pendingComments = response.data.filter(
        (comment) => !comment.approved // Filter unapproved comments
      );
      setComments(pendingComments);
    } catch (err) {
      setError("Failed to load comments");
    }
  };

  // Approve a comment
  const handleApprove = async (id) => {
    try {
      const response = await fetch(`/api/comments/${id}/approve`, {
        method: "PUT",
      });
      const data = await response.json();
  
      if (response.ok && data.message === "Comment approved successfully") {
        alert("Comment approved!");
        fetchPendingComments();  // Refresh the list of comments after approval
      } else {
        alert("Failed to approve the comment.");
      }
    } catch (err) {
      setError("Failed to approve the comment");
      console.error("Error approving comment:", err);
    }
  };
  

  // Disapprove (delete) a comment
  const handleDisapprove = async (id) => {
    try {
      await axios.delete(`/api/comments/${id}`);
      fetchPendingComments();
    } catch (err) {
      console.error("Disapprove error:", err.response?.data || err.message);
      setError("Failed to disapprove the comment");
    }
  };

  // Fetch comments on component load
  useEffect(() => {
    fetchPendingComments();
  }, []);

  return (
    <header className="flex">
      <Sidebar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Manage Comments</h1>
        {error && <p className="text-red-600">{error}</p>}
        <div>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment._id} className="border-b py-4">
                  <p>
                    <strong>{comment.name}</strong>: {comment.message}
                  </p>
                  <div className="flex gap-4 mt-2">
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded"
                      onClick={() => handleApprove(comment._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded"
                      onClick={() => handleDisapprove(comment._id)}
                    >
                      Disapprove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No pending comments.</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default ManageComments;
