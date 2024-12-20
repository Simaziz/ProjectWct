import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI; // Set your MongoDB URI in .env.local
const MONGODB_URI = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(MONGODB_URI);
  clientPromise = client.connect();
}

export default clientPromise;
