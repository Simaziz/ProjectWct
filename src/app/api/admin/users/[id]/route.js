import clientPromise from "../../../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function PATCH(req, { params }) {
  try {
    const { id } = params; // Get the user ID from the route params
    const { action } = await req.json(); // 'approve' or 'reject'

    if (!["approve", "reject"].includes(action)) {
      return new Response(JSON.stringify({ message: "Invalid action" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("your_database_name");

    const updatedStatus = action === "approve" ? "approved" : "rejected";

    await db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: updatedStatus } }
    );

    return new Response(JSON.stringify({ message: `User ${updatedStatus}` }), { status: 200 });
  } catch (error) {
    console.error("Error updating user status:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}
