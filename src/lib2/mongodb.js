import { MongoClient } from "mongodb";

// Ensure that MONGODB_URI is defined in your environment variables
const uri = process.env.MONGODB_URI;

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { db: cachedDb, client: cachedClient };
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(); // Automatically uses the database from the connection string

  cachedClient = client;
  cachedDb = db;

  return { db, client };
}
