import { Schema, model, Document } from "mongoose";

interface ISong extends Document {
  title: string;
  artist: string;
  difficulty: string;
  genre: string;
  tabContent: string;
  backingTrackUrl: string;
  videoUrls: string[]; // Notice it's an array!
}

const songSchema = new Schema<ISong>({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  difficulty: { type: String },
  genre: { type: String },
  tabContent: { type: String },
  backingTrackUrl: { type: String },
  videoUrls: { type: [String], default: [] }
});

export const Song = model<ISong>("Song", songSchema);