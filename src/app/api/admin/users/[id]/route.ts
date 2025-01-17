// app/api/admin/users/[id]/route.ts

import clientPromise from "../../../../../../lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  try {
    const { id } = params; // Get the user ID from the route params

    // Ensure that the ID exists
    if (!id) {
      return new NextResponse(
        JSON.stringify({ message: "ID is required" }),
        { status: 400 }
      );
    }

    // Parse the request body
    const { action } = await req.json();

    // Validate the action parameter (approve or reject)
    if (!["approve", "reject"].includes(action)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid action" }),
        { status: 400 }
      );
    }

    // Connect to the database
    const client = await clientPromise;
    const db = client.db();  // Ensure to use the correct database name or environment variable

    // Determine the updated status based on the action
    const updatedStatus = action === "approve" ? "approved" : "rejected";

    // Update the user's status in the database
    const result = await db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: updatedStatus } }
    );

    // Check if the update was successful
    if (result.modifiedCount === 0) {
      return new NextResponse(
        JSON.stringify({ message: "User not found or already updated" }),
        { status: 404 }
      );
    }

    // Successful response
    return new NextResponse(
      JSON.stringify({ message: `User ${updatedStatus}` }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user status:", error);
    return new NextResponse(
      JSON.stringify({ message: "Internal server error", error: error.message }),
      { status: 500 }
    );
  }
}
