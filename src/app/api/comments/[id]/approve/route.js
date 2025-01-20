// src/app/api/comments/[id]/approve/route.js
import { connectToDatabase } from "../../../../../lib2/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req, { params }) {
  const { id } = params; // Get the comment ID from the URL
  try {
    const { db } = await connectToDatabase();

    // Update the comment with the specified ID and set "approved" to true
    const result = await db.collection("comments").updateOne(
      { _id: new ObjectId(id) },
      { $set: { approved: true } }
    );

    if (result.modifiedCount === 0) {
      return new Response(JSON.stringify({ error: "Comment not found or already approved" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ message: "Comment approved successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error approving comment:", error);
    return new Response(JSON.stringify({ error: "Failed to approve comment" }), { status: 500 });
  }
}
