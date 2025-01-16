import { connectToDatabase } from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    console.log("Received login request");

    const { email, password } = await req.json();
    console.log("Email:", email);

    if (!email || !password) {
      console.log("Email or password missing");
      return new Response(
        JSON.stringify({ message: "Email and password are required." }),
        { status: 400 }
      );
    }

    await connectToDatabase();
    console.log("Connected to database");

    const user = await User.findOne({ email });
    console.log("User found:", user);

    if (!user) {
      console.log("User not found");
      return new Response(
        JSON.stringify({ message: "Invalid email or password." }),
        { status: 401 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    console.log("Password correct:", isPasswordCorrect);

    if (!isPasswordCorrect) {
      console.log("Incorrect password");
      return new Response(
        JSON.stringify({ message: "Invalid email or password." }),
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    console.log("Token generated:", token);

    return new Response(
      JSON.stringify({
        message: "Login successful.",
        token,
        user: { name: user.name, email: user.email },
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