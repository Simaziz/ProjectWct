"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "src/app/components/SidebarAdmin";

// Define the Comment type
interface Comment {
  _id: string;
  name: string;
  message: string;
  approved: boolean;
}

const ManageComments = () => {
  const [comments, setComments] = useState<Comment[]>([]); // Use the Comment type
  const [error, setError] = useState<string | null>(null);

  // Fetch pending comments
  const fetchPendingComments = async () => {
    try {
      const response = await axios.get("/api/commentsFetch"); // Fetch all comments
      const pendingComments = response.data.filter(
        (comment: Comment) => !comment.approved // Filter unapproved comments
      );
      setComments(pendingComments);
    } catch (err) {
      if (err instanceof Error) {
        setError("Failed to load comments: " + err.message);
      } else {
        setError("Failed to load comments: An unknown error occurred.");
      }
    }
  };

  // Approve a comment
  const handleApprove = async (id: string) => {
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
      if (err instanceof Error) {
        setError("Failed to approve the comment: " + err.message);
      } else {
        setError("Failed to approve the comment: An unknown error occurred.");
      }
      console.error("Error approving comment:", err);
    }
  };

  // Disapprove (delete) a comment
  const handleDisapprove = async (id: string) => {
    try {
      await axios.delete(`/api/comments/${id}`);
      fetchPendingComments();  // Refresh the list of comments after deletion
    } catch (err) {
      if (err instanceof Error) {
        setError("Failed to disapprove the comment: " + err.message);
      } else {
        setError("Failed to disapprove the comment: An unknown error occurred.");
      }
      console.error("Disapprove error:", err);
    }
  };

  // Fetch comments on component load
  useEffect(() => {
    fetchPendingComments();
  }, []);

  return (
    <header className="flex bg-gray-50 gap-[20rem]">
      <Sidebar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-black">Manage Comments</h1>
        {error && <p className="text-red-600">{error}</p>}
        <div>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment._id} className="border-b py-4 text-black">
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