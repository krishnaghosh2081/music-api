import mongoose, { Schema, Document } from 'mongoose';

const RecordedFileSchema = new mongoose.Schema({
  originalName: String,
  fileName: String,
  filePath: String,
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Recording', RecordedFileSchema);
