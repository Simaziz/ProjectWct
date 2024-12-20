import { connectToDatabase } from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    // Parse request data
    const { name, email, password } = await req.json();

    // Validate input fields
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required.", color: "red" }),
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "User already exists.", color: "red" }),
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User created successfully!", color: "green" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in signup API:", error);
    return new Response(
      JSON.stringify({ message: "Server error. Please try again later.", color: "red" }),
      { status: 500 }
    );
  }
}
