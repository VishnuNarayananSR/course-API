import mongoose from "mongoose";

export default async () => {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/course-db";
  mongoose.set("strictQuery", true);
  const conn = await mongoose.connect(uri);
  console.log("Connected to MongoDB");
  return conn;
};
