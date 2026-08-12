import mongoose, { Schema, Document } from 'mongoose';

export interface ISong extends Document {
  title: string;
  artist: string;
  difficulty: string;
  genre: string;
  tabContent: string;
  backingTrackUrl: string;
  videoUrl: string;
}

const songSchema: Schema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  genre: { type: String },
  tabContent: { type: String },
  backingTrackUrl: { type: String },
  videoUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<ISong>('Song', songSchema);