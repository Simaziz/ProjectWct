import connectToDatabase from "../../../../lib/mongodb";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase();
      const { commentId } = req.body;

      // Validate input
      if (!commentId || !ObjectId.isValid(commentId)) {
        return res.status(400).json({ error: 'Invalid comment ID' });
      }

      // Delete comment (or update its status)
      const result = await db.collection('comments').deleteOne({ _id: new ObjectId(commentId) });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Comment not found' });
      }

      res.status(200).json({ message: 'Comment disapproved successfully' });
    } catch (error) {
      console.error(`Error disapproving comment (ID: ${req.body?.commentId || 'N/A'}):`, error);
      res.status(500).json({ error: 'Failed to disapprove the comment. Please try again later.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
