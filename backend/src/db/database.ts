import mongoose from "mongoose";

const mongoConnect = async (): Promise<void> => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("❌ Missing MONGODB_URI in .env");
    }

    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB via Mongoose");
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("❌ MongoDB connection failed:", err.message);
      throw err;
    } else {
      console.error("❌ MongoDB connection failed with unknown error");
      throw new Error("Unknown MongoDB connection error");
    }
  }
};

export default mongoConnect;
