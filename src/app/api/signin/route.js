import { connectToDatabase } from "../../utils/db";
import User from "../../models2/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    console.log("Received login request");

    const { email, password } = await req.json();

    // Check if email and password are provided
    if (!email || !password) {
      console.log("Email or password missing");
      return new Response(
        JSON.stringify({ message: "Email and password are required." }),
        { status: 400 }
      );
    }

    // Check if email format is valid (basic check)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ message: "Invalid email format." }),
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDatabase();
    console.log("Connected to database");

    // Find user in the database
    const user = await User.findOne({ email });
    console.log("User found:", user);

    // Check if user exists
    if (!user) {
      console.log("User not found");
      return new Response(
        JSON.stringify({ message: "Invalid email or password." }),
        { status: 401 }
      );
    }

    // Check password validity
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    console.log("Password correct:", isPasswordCorrect);

    if (!isPasswordCorrect) {
      console.log("Incorrect password");
      return new Response(
        JSON.stringify({ message: "Invalid email or password." }),
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET, // Ensure JWT_SECRET is set in your .env file
      { expiresIn: "1h" }
    );
    console.log("Token generated:", token);

    // Send successful response including _id of the user
    return new Response(
      JSON.stringify({
        message: "Login successful.",
        token,
        user: { _id: user._id, name: user.name, email: user.email },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error. Please try again later." }),
      { status: 500 }
    );
  }
}
