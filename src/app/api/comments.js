// pages/api/comments.js
import { connectToDatabase } from '../../../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase();
      const { traineeName, traineeComment, rating } = req.body;

      // Insert new comment into the database
      const result = await db.collection('comments').insertOne({
        traineeName,
        traineeComment,
        rating,
        createdAt: new Date(),
      });

      res.status(201).json({ message: 'Comment submitted successfully!' });
    } catch (error) {
      console.error('Error submitting comment:', error);
      res.status(500).json({ error: 'Failed to submit comment' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
