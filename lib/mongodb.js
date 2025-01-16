// src/lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Ensure this is set in your environment variables

let clientPromise;

if (process.env.NODE_ENV === "development") {
  let globalWithMongoClient = global;
  if (!globalWithMongoClient._mongoClientPromise) {
    globalWithMongoClient._mongoClientPromise = MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  clientPromise = globalWithMongoClient._mongoClientPromise;
} else {
  clientPromise = MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default clientPromise;
