import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// MongoDB connection setup
const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// GET request: Fetch all comments
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const comments = await db.collection("comments").find().toArray();
    return NextResponse.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { message: "Failed to load comments" },
      { status: 500 }
    );
  }
}

// POST request: Add a new comment
export async function POST(req) {
  try {
    const { name, message } = await req.json();

    // Validation
    if (!name || !message) {
      return NextResponse.json(
        { message: "Name and message are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    await db.collection("comments").insertOne({
      name,
      message,
      createdAt: new Date(),
      approved: false,
    });

    return NextResponse.json(
      { message: "Comment submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting comment:", error);
    return NextResponse.json(
      { message: "Failed to submit comment" },
      { status: 500 }
    );
  }
}

// PUT request: Update comment approval status
export async function PUT(req) {
  try {
    const { id, approved } = await req.json();

    // Validation for required data
    if (!id || typeof approved !== "boolean") {
      return NextResponse.json(
        { message: "Invalid request data" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    await db.collection("comments").updateOne(
      { _id: new ObjectId(id) },
      { $set: { approved } }
    );

    return NextResponse.json(
      { message: "Comment updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating comment:", error);
    return NextResponse.json(
      { message: "Failed to update comment" },
      { status: 500 }
    );
  }
}
