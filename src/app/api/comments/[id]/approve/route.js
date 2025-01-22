import { connectToDatabase } from "../../../../lib2/mongodb"; // Adjust the path if needed
import { ObjectId } from "mongodb"; // Import ObjectId for MongoDB query

export async function PUT(req, { params }) {
  try {
    const { id } = params; // Extract the id from the URL parameters
    const { db } = await connectToDatabase();

    // Update the 'approved' field of the comment
    const result = await db.collection("comments").updateOne(
      { _id: new ObjectId(id) },
      { $set: { approved: true } } // Set approved to true
    );

    // If no document is updated, return a 404 error
    if (result.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ error: "Comment not found or already approved" }),
        { status: 404 }
      );
    }

    // Return a success message
    return new Response(
      JSON.stringify({ message: "Comment approved successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error approving comment:", error);
    return new Response(
      JSON.stringify({ error: "Failed to approve the comment" }),
      { status: 500 }
    );
  }
}
