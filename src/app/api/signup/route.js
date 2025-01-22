import { connectToDatabase } from "../../../app/utils/db";
import User from "../../../app/models2/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // Validate input fields
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    // Basic email and password validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ message: "Invalid email format." }),
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return new Response(
        JSON.stringify({ message: "Password must be at least 6 characters long." }),
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "User already exists." }),
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user object
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Check if JWT_SECRET is defined in environment
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined.');
      return new Response(
        JSON.stringify({ message: "Server configuration error." }),
        { status: 500 }
      );
    }

    // Log the JWT_SECRET value (for debugging purposes)
    console.log('JWT_SECRET:', process.env.JWT_SECRET);  // This will output your JWT_SECRET in server logs

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email, name: newUser.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Return successful response with user details and token
    return new Response(
      JSON.stringify({
        message: "User created successfully!",
        token,
        user: { name: newUser.name, email: newUser.email, _id: newUser._id },
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Unhandled error in signup API:", error);
    return new Response(
      JSON.stringify({ message: "Server error. Please try again later." }),
      { status: 500 }
    );
  }
}
