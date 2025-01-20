import {connectToDatabase } from "../../../lib2/mongodb";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse incoming JSON data
    const { name, message } = body;

    // Validate the data
    if (!name || !message) {
      return new Response(
        JSON.stringify({ error: "Name and message are required" }),
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    // Insert the comment into the database
    const result = await db.collection("comments").insertOne({
      name,
      message,
      approved: false, // Default to unapproved
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ id: result.insertedId, message: "Comment submitted successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("POST error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to submit the comment" }),
      { status: 500 }
    );
  }
}
