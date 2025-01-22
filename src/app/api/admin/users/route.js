import { connectToDatabase } from "../../../lib2/mongodb"; // MongoDB connection helper
import User from "../../../models2/User"; // User model
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    // Connect to database
    await connectToDatabase();

    // Fetch users (you can add other filters or projections as needed)
    const users = await User.find({}, { name: 1, email: 1, role: 1 }); // Only get name, email, and role

    // Return the users data in the response
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
export async function POST(req) {
    try {
      // Extract user data from the request body
      const { name, email, password, role } = await req.json();
  
      // Connect to database
      await connectToDatabase();
  
      // Validate the required fields
      if (!name || !email || !password) {
        return NextResponse.json(
          { success: false, message: "Name, email, and password are required" },
          { status: 400 }
        );
      }
  
      // Create a new user in the database
      const newUser = new User({
        name,
        email,
        password, // Remember to hash the password in a real app
        role: role || "trainee", // Default to "trainee" if role is not provided
      });
  
      await newUser.save();
  
      return NextResponse.json({ success: true, data: newUser });
    } catch (error) {
      console.error("Error creating user:", error);
      return NextResponse.json(
        { success: false, message: "Failed to create user" },
        { status: 500 }
      );
    }
  }
  export async function PATCH(req) {
    try {
      const { id, name, email } = await req.json();
      const adminRole = req.headers.get('x-admin-role'); // Replace with actual method to get the admin role
  
      if (adminRole !== "admin") {
        return NextResponse.json(
          { success: false, message: "Unauthorized" },
          { status: 403 }
        );
      }
  
      // Find the user by ID
      const user = await User.findById(id);
      if (!user) {
        return NextResponse.json(
          { success: false, message: "User not found" },
          { status: 404 }
        );
      }
  
      // Update user details
      if (name) user.name = name;
      if (email) user.email = email;
  
      await user.save();
  
      return NextResponse.json({ success: true, data: user });
    } catch (error) {
      console.error("Error updating user:", error);
      return NextResponse.json(
        { success: false, message: "Failed to update user" },
        { status: 500 }
      );
    }
  }
// src/pages/api/admin/users/[id].js



// src/pages/api/admin/users/[id].js

// import { connectToDatabase } from "../../../../lib/mongodb"; // Adjust path as needed
// import User from "../../../../models/User"; // Adjust path as needed
// import { NextResponse } from 'next/server';

// export async function DELETE(req, { params }) {
//   try {
//     // Extract the user ID from the URL params
//     const { id } = params;

//     // Ensure that the id is not empty or undefined
//     if (!id) {
//       return NextResponse.json(
//         { success: false, message: "User ID is required" },
//         { status: 400 }
//       );
//     }

//     // Connect to the database
//     await connectToDatabase();

//     // Try to delete the user by ID
//     const deletedUser = await User.findByIdAndDelete(id);

//     // If the user doesn't exist, return a 404 response
//     if (!deletedUser) {
//       return NextResponse.json(
//         { success: false, message: "User not found" },
//         { status: 404 }
//       );
//     }

//     // Successfully deleted the user
//     return NextResponse.json({ success: true, message: "User deleted" });
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to delete user" },
//       { status: 500 }
//     );
//   }
// }


      