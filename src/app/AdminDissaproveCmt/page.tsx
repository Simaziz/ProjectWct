"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const DisapproveComment = () => {
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [disapprovingCommentId, setDisapprovingCommentId] = useState(null); // Track the ID of the comment being disapproved

  // Fetch comments from the backend
  const fetchComments = async () => {
    try {
      const response = await axios.get('/api/comments');
      if (response.data && Array.isArray(response.data)) {
        setComments(response.data);
      } else {
        setComments([]);
        setMessage('No comments found.');
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
      setMessage('Failed to load comments. Please try again.');
    }
  };

  // Disapprove comment handler
  const handleDisapprove = async (commentId) => {
    setLoading(true);
    setMessage('');
    setDisapprovingCommentId(commentId);

    try {
      const response = await axios.post('/api/disapprove', { commentId });
      setMessage(response.data.message || 'Comment disapproved successfully.');

      // Update UI immediately
      setComments((prevComments) =>
        prevComments.filter((comment) => comment._id !== commentId)
      );
    } catch (error) {
      console.error('Error disapproving comment:', error);
      setMessage(
        error.response?.data?.error || 'Failed to disapprove the comment. Please try again.'
      );
    } finally {
      setLoading(false);
      setDisapprovingCommentId(null);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Admin: Disapprove Comments</h2>
      {message && <p className="text-center text-red-600 mt-4">{message}</p>}

      <div className="mt-4">
        {comments.length === 0 ? (
          <p className="text-center text-gray-600">No comments to disapprove.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment._id} className="border-b py-4">
              <div>
                <strong className="text-lg">{comment.traineeName}</strong>
                <p className="text-gray-700">{comment.traineeComment}</p>
                <p className="text-gray-500">Rating: {comment.rating}</p>
                
                <button
                  onClick={() => handleDisapprove(comment._id)}
                  className={`bg-red-600 text-white py-2 px-4 rounded mt-2 hover:bg-red-800 ${
                    disapprovingCommentId === comment._id ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={disapprovingCommentId === comment._id}
                >
                  {disapprovingCommentId === comment._id ? 'Disapproving...' : 'Disapprove'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DisapproveComment;
