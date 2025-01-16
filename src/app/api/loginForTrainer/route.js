import bcrypt from "bcrypt";
import clientPromise from "../../../../lib/mongodb";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return new Response(JSON.stringify({ message: "Email and password are required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("test");

    // Check if user exists
    const user = await db.collection("users").findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), { status: 400 });
    }

    // Check if user is approved
    if (user.status !== "approved") {
      return new Response(
        JSON.stringify({ message: user.status === "pending" ? "Your account is pending approval." : "Your account has been rejected." }),
        { status: 400 }
      );
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 400 });
    }

    // User is approved and password is correct, login successful
    return new Response(
      JSON.stringify({ message: "Login successful", user: { name: user.name, email: user.email } }),
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
