import clientPromise from "../../../../../lib/mongodb";
export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db("your_database_name");

    const pendingUsers = await db.collection("users").find({ status: "pending" }).toArray();

    return new Response(JSON.stringify({ users: pendingUsers }), { status: 200 });
  } catch (error) {
    console.error("Error fetching pending users:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}
