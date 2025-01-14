import { connectToDatabase } from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    await connectToDatabase();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "User already exists." }),
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email, name: newUser.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return new Response(
      JSON.stringify({
        message: "User created successfully!",
        token,
        user: { name: newUser.name, email: newUser.email },
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in signup API:", error);
    return new Response(
      JSON.stringify({ message: "Server error. Please try again later." }),
      { status: 500 }
    );
  }
}
