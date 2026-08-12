import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) throw new Error('MONGODB_URI environment variable is not defined');
  const conn = await mongoose.connect(mongoUri);
  console.log(`MongoDB connected successfully to database: ${conn.connection.name || 'music-api'}`);
};

export default connectDB;