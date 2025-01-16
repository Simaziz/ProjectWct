import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
let clientPromise = MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function PUT(req, { params }) {
  const { id } = params;
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("comments");

    // Parse the request body
    const { approved } = await req.json();

    // Update the comment
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { approved } }
    );

    if (result.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ message: "Comment not found or already updated" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Comment updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating comment:", error);
    return new Response(
      JSON.stringify({ message: "Failed to update comment" }),
      { status: 500 }
    );
  }
}
