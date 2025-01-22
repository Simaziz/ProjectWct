import { connectToDatabase } from "../../../lib2/mongodb"; // Correct path to your mongodb connection file
import User from "../../../models2/User";  // Correct path to your User model
import { ObjectId } from 'mongodb';  // Import ObjectId from mongodb package
import { NextResponse } from 'next/server';  // For handling Next.js API responses

export async function DELETE(req, { params }) {
  try {
    // Extract the user ID from the URL params
    const { id } = params;
    
    // Ensure that the ID is present
    if (!id) {
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );
    }

    // Convert the ID to a MongoDB ObjectId
    const objectId = new ObjectId(id);

    // Connect to the database
    await connectToDatabase();

    // Delete the user by ID
    const deletedUser = await User.findByIdAndDelete(objectId);

    // If the user doesn't exist, return 404
    if (!deletedUser) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Return success message
    return NextResponse.json({ success: true, message: "User deleted" });

  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete user" },
      { status: 500 }
    );
  }
}
