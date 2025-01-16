import bcrypt from "bcrypt";
import clientPromise from "../../../../lib/mongodb"; // Adjust the path according to your project structure

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email and password are required" }),
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("your_database_name"); // Replace with your actual DB name

    // Look for the user by email
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return new Response(
        JSON.stringify({ message: "User not found" }),
        { status: 404 }
      );
    }

    // Check if the user is approved
    if (user.status !== "approved") {
      return new Response(
        JSON.stringify({
          message: user.status === "pending"
            ? "Your account is pending approval."
            : "Your account has been rejected."
        }),
        { status: 403 }
      );
    }

    // Validate the password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ message: "Invalid credentials" }),
        { status: 401 }
      );
    }

    // Successful login, return the updated user data (including name, email, etc.)
    const userData = {
      name: user.name,
      email: user.email,
      status: user.status,
      // Add any other relevant fields from your database
    };

    return new Response(
      JSON.stringify({
        message: "Login successful",
        user: userData,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}
