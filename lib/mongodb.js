import { MongoClient } from "mongodb";

// Ensure that this is correctly set in your environment variables
const uri = process.env.MONGODB_URI; 

let clientPromise;

if (process.env.NODE_ENV === "development") {
  // For development, use global to avoid re-initializing MongoClient
  let globalWithMongoClient = global;
  
  if (!globalWithMongoClient._mongoClientPromise) {
    globalWithMongoClient._mongoClientPromise = MongoClient.connect(uri);
  }
  
  clientPromise = globalWithMongoClient._mongoClientPromise;
} else {
  // In production, just connect to MongoDB
  clientPromise = MongoClient.connect(uri);
}

export default clientPromise;
