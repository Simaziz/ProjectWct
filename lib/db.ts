import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async (): Promise<void> => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log("Already connected");
        return;
    }
    if (connectionState === 2) {
        console.log("Connecting...");
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI as string, {
            dbName: 'next14restapi',
            bufferCommands: true,
        });
        console.log("Connected to MongoDB");
    } catch (err: unknown) {
        console.error("Error connecting to MongoDB:", err);
        throw new Error((err as Error).message || "Unknown error");
    }
};

export default connect;
