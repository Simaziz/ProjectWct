import { connectToDatabase } from "../../lib2/mongodb";

// POST method for submitting a comment
export async function POST(req) {
  try {
    // Parse incoming JSON data
    const body = await req.json();
    const { name, message } = body;

    // Validate the data
    if (!name || !message) {
      return new Response(
        JSON.stringify({ error: "Name and message are required" }),
        { status: 400 }
      );
    }

    // Connect to the database
    const { db } = await connectToDatabase();

    // Ensure the database is connected
    if (!db) {
      console.error("Database connection failed.");
      return new Response(
        JSON.stringify({ error: "Database connection failed" }),
        { status: 500 }
      );
    }

    // Log the comment data to be inserted
    console.log("Inserting comment:", { name, message });

    // Insert the comment into the database
    const result = await db.collection("comments").insertOne({
      name,
      message,
      approved: false, // Default to unapproved
      createdAt: new Date(),
    });

    // Log the insertion result
    console.log("Comment inserted:", result);

    if (!result.acknowledged) {
      throw new Error("Failed to insert comment");
    }

    // Respond with success message and inserted comment ID
    return new Response(
      JSON.stringify({ id: result.insertedId, message: "Comment submitted successfully" }),
      { status: 201 }
    );
  } catch (error) {
    // Log the error
    console.error("POST error:", error.message, error.stack);

    // Return an error response if something goes wrong
    return new Response(
      JSON.stringify({ error: "Failed to submit the comment. Try again." }),
      { status: 500 }
    );
  }
}
