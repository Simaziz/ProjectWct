import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI;
let clientPromise = MongoClient.connect(uri);

export async function PUT(req, { params }) {
  const { id } = params;

  // Log the params to check if id is available
  console.log("Params:", params);

  // Ensure 'id' is provided
  if (!id) {
    return NextResponse.json(
      { message: "ID is required" },
      { status: 400 }
    );
  }

  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("comments");

    // Parse the request body and log it for debugging
    const body = await req.json();
    console.log("Request Body:", body);

    const { approved } = body;

    // Validate the 'approved' field
    if (typeof approved !== "boolean") {
      return NextResponse.json(
        { message: "'approved' must be a boolean" },
        { status: 400 }
      );
    }

    // Update the comment in the database
    const result = await collection.updateOne(
      { _id: new ObjectId(id) }, // Convert 'id' to ObjectId for MongoDB
      { $set: { approved } }
    );

    // Check if the update was successful
    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { message: "Comment not found or already updated" },
        { status: 404 }
      );
    }

    // Successful response
    return NextResponse.json(
      { message: "Comment updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Log error and return failure response
    console.error("Error updating comment:", error);
    return NextResponse.json(
      { message: "Failed to update comment", error: error.message },
      { status: 500 }
    );
  }
}
