import mongoose from "mongoose";

export default async () => {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/course-db";
  const conn = await mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  console.log("Connected to MongoDB");
  return conn;
};
