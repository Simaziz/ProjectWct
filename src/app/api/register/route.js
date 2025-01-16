import bcrypt from "bcrypt";
import clientPromise from "../../../../lib/mongodb";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // Validate input
    if (!name || !email || !password) {
      return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("your_database_name");

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user with 'pending' status
    const newUser = {
      name,
      email,
      password: hashedPassword,
      status: "pending", // User requires admin approval
      createdAt: new Date(),
    };
    await db.collection("users").insertOne(newUser);

    return new Response(
      JSON.stringify({ message: "Registration successful. Awaiting admin approval." }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in register route:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}
