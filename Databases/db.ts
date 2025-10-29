import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";


dotenv.config({ path: path.resolve(__dirname, "./config/.env") });

export const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error(" MONGO_URI is not defined in .env file");
    }

    await mongoose.connect(uri, {
      dbName: "e-pharmacy",
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });

    console.log(" MongoDB connected successfully");
  } catch (error: any) {
    console.error(" MongoDB connection error:", error.message);
    process.exit(1); 
  }
};
