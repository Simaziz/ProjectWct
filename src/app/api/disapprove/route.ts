import {connectToDatabase }from "../../lib2/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    const { commentId } = body;

    // Validate input
    if (!commentId || typeof commentId !== "string" || !ObjectId.isValid(commentId)) {
      return new Response(
        JSON.stringify({ error: "Invalid or missing comment ID" }),
        { status: 400 }
      );
    }

    // Connect to the database
    const { db } = await connectToDatabase();

    // Attempt to delete the comment
    const result = await db.collection("comments").deleteOne({ _id: new ObjectId(commentId) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Comment not found" }), { status: 404 });
    }

    // Successful response
    return new Response(JSON.stringify({ message: "Comment disapproved successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error disapproving comment:", error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request. Please try again.",
      }),
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic"; // Optional: Forces dynamic behavior for the route.
