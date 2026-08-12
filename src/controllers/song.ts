import { type RequestHandler } from 'express';
import Song from "../models/Song.ts";
import songsData from "../seed-script/seeds.ts"

export const getSongs: RequestHandler = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const uploadBasicSongs: RequestHandler = async (req, res) => {
  try {
    await Song.deleteMany({});
    await Song.insertMany(songsData);
    res.json("Basic Songs Uploaded");
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
