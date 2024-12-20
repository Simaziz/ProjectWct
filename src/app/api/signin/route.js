import { connectToDatabase } from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Validate inputs
    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email and password are required.", success: false }),
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({ message: "Invalid email or password.", success: false }),
        { status: 401 }
      );
    }

    // Compare the password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return new Response(
        JSON.stringify({ message: "Invalid email or password.", success: false }),
        { status: 401 }
      );
    }

    // Login successful
    return new Response(
      JSON.stringify({
        message: "Login successful.",
        success: true,
        user: { email: user.email },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error. Please try again later.", success: false }),
      { status: 500 }
    );
  }
}
