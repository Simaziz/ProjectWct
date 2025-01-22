import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Make sure you have the MongoDB URI set up in your .env file
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so the MongoClient is not constantly re-initialized
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db();
  return { db };
}
