import mongoose, { Schema, Document } from 'mongoose';

export interface ISong extends Document {
  title: string;
  artist: string;
  difficulty: string;
  genre: string;
  tabContent: string;
  backingTrackUrl: string;
  videoUrl: string;
  vidLesson1: string;
  vidLesson2: string;
  vidLesson3: string;
  vidLesson4: string;
}

const songSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      required: true,
    },
    genre: { type: String },
    tabContent: { type: String },
    backingTrackUrl: { type: String },
    videoUrl: { type: String },
    vidLesson1: { type: String },
    vidLesson2: { type: String },
    vidLesson3: { type: String },
    vidLesson4: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  {
    toJSON: { virtuals: true },
  },
);

export default mongoose.model<ISong>('Song', songSchema);
