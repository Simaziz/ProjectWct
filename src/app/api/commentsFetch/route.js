import {connectToDatabase } from "../../../lib2/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const comments = await db.collection("comments").find({}).toArray();
    console.log("Fetched comments from DB:", comments); // Log fetched comments for debugging
    return new Response(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    console.error("Error fetching comments:", error); // Log any errors
    return new Response(
      JSON.stringify({ error: "Failed to fetch comments" }),
      { status: 500 }
    );
  }
}
