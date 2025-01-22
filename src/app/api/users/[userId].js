import { connectToDatabase } from "../../utils/db";
import User from "../../models2/User";

export async function GET(req, { params }) {
  const { userId } = params; // Extract userId from the URL

  try {
    await connectToDatabase();
    const user = await User.findById(userId); // Find user by ID

    if (!user) {
      return new Response(
        JSON.stringify({ message: "User not found." }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ name: user.name, email: user.email, _id: user._id }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch user." }),
      { status: 500 }
    );
  }
}
