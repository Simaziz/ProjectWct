import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Ensure a single MongoClient instance in development mode
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Create a new MongoClient in production
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const comments = await db.collection("comments").find().toArray();
    return new Response(JSON.stringify(comments), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return new Response(
      JSON.stringify({ message: "Failed to load comments" }),
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { name, message } = await req.json();

    if (!name || !message) {
      return new Response(
        JSON.stringify({ message: "Name and message are required" }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    await db
      .collection("comments")
      .insertOne({ name, message, createdAt: new Date(), approved: false });

    return new Response(
      JSON.stringify({ message: "Comment submitted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting comment:", error);
    return new Response(
      JSON.stringify({ message: "Failed to submit comment" }),
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const { id, approved } = await req.json();

    if (!id || typeof approved !== "boolean") {
      return new Response(
        JSON.stringify({ message: "Invalid request data" }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    await db
      .collection("comments")
      .updateOne({ _id: new ObjectId(id) }, { $set: { approved } });

    return new Response(
      JSON.stringify({ message: "Comment updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating comment:", error);
    return new Response(
      JSON.stringify({ message: "Failed to update comment" }),
      { status: 500 }
    );
  }
}
