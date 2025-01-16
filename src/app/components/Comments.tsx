"use client"
import { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch comments from the backend
  const fetchComments = async () => {
    try {
      const response = await axios.get("/api/comments");
      setComments(response.data);
    } catch (error) {
      console.error("Failed to fetch comments", error);
    }
  };

  // Handle comment submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.post("/api/comments", { name, message });
      if (response.status === 200) {
        alert(response.data.message); // Show success message
        setName("");
        setMessage("");
        fetchComments(); // Reload comments after submission
      } else {
        console.error("Error response:", response.data.error);
        alert("Failed to submit comment. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit comment. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  // Load comments when component mounts
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      
      {/* Comment form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Comment"}
        </button>
      </form>

      {/* Displaying comments */}
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment._id} className="comment">
            <p><strong>{comment.name}</strong>:</p>
            <p>{comment.message}</p>
            <p><em>{new Date(comment.createdAt).toLocaleString()}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
