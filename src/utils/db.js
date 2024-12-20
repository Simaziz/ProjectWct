import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("Already connected to the database");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error); // Log any DB connection issues
    throw new Error("Database connection failed");
  }
};
