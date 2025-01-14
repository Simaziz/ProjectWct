import { connectToDatabase } from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email and password are required." }),
        { status: 400 }
      );
    }

    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({ message: "Invalid email or password." }),
        { status: 401 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
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
