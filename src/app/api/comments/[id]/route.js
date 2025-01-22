import { connectToDatabase } from "../../../lib2/mongodb"; // Adjust the path if necessary
import { ObjectId } from "mongodb"; // Import ObjectId to work with MongoDB IDs

// Handle DELETE requests for a specific comment by ID
export async function DELETE(req, { params }) {
  try {
    const { id } = params; // Extract the id from the URL parameters
    const { db } = await connectToDatabase();

    // Delete the comment from the database
    const result = await db.collection("comments").deleteOne({ _id: new ObjectId(id) });

    // If the comment wasn't found, return a 404
    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ error: "Comment not found" }),
        { status: 404 }
      );
    }

    // Return a success message
    return new Response(
      JSON.stringify({ message: "Comment deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting comment:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete the comment" }),
      { status: 500 }
    );
  }
}
