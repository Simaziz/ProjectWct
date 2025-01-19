// /lib/db.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connectToDatabase = async () => {
  const connectionState = mongoose.connection.readyState;

  // If already connected, return the database
  if (connectionState === 1) {
    console.log('Already connected to the database');
    return mongoose.connection;
  }

  // If currently connecting, wait until the connection is established
  if (connectionState === 2) {
    console.log('Currently connecting...');
    return new Promise((resolve, reject) => {
      mongoose.connection.once('open', () => resolve(mongoose.connection));
      mongoose.connection.once('error', (error) => reject(error));
    });
  }

  // Establish new connection to the database
  try {
    await mongoose.connect(MONGODB_URI as string, {
      dbName: 'next14restapi',
      bufferCommands: true,
    });
    console.log('Connected to MongoDB');
    return mongoose.connection; // Return connection object which contains `db`
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw new Error((err as Error).message || 'Unknown error');
  }
};

export default connectToDatabase;
