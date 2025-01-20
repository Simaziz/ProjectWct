import { connectToDatabase } from "../../../../lib2/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req, { params }) {
  const { id } = params;  // Get the comment id from the URL parameter

  try {
    const client = await connectToDatabase();
    const db = client.db();
    const commentsCollection = db.collection("comments");

    // Update the "approved" field to true for the comment with the specified id
    const result = await commentsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { approved: true } }
    );

    if (result.modifiedCount > 0) {
      return new Response(
        JSON.stringify({ message: "Comment approved successfully" }),
        { status: 200 }
      );
    } else {
      return new Response("Failed to approve the comment", { status: 400 });
    }
  } catch (err) {
    console.error("Error approving comment:", err);
    return new Response("Error approving comment", { status: 500 });
  }
}
