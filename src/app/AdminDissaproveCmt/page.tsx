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
      const response = await axios.get("/api/comments"); // Fetch all comments
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
      await axios.put(`/api/comments/${id}`, { approved: true });
      fetchPendingComments(); // Refresh comments after approval
    } catch (err) {
      setError("Failed to approve the comment");
    }
  };

  // Disapprove a comment
  const handleDisapprove = async (id) => {
    try {
      await axios.delete(`/api/comments/${id}`); // Send DELETE request to remove the comment
      fetchPendingComments(); // Refresh comments in the admin panel
    } catch (err) {
      setError("Failed to disapprove the comment");
    }
  };
  

  // Fetch comments on component load
  useEffect(() => {
    fetchPendingComments();
  }, []);

  return (
   <header className="flex">
    <Sidebar/>
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
