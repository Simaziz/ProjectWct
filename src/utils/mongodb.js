import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const connectToDatabase = async () => {
  if (!client.isConnected()) {
    await client.connect();
  }
  return { db: client.db(process.env.MONGODB_DB) }; // Ensure you have `MONGODB_DB` set in your `.env` file
};
