import { type RequestHandler } from 'express';
import Song from '../models/Song.ts';
import songsData from '../seed-script/seeds.ts';
import mongoose from 'mongoose';

export const getSongs: RequestHandler = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const uploadBasicSongs: RequestHandler = async (req, res) => {
  try {
    await Song.deleteMany({});
    await Song.insertMany(songsData);
    res.json('Basic Songs Uploaded');
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

//fetch a single song by id
export const getSongById: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   res.status(400).json({ message: 'Invalid song id' });
    //   return;
    // }

    const song = await Song.findById(id);

    if (!song) {
      res.status(404).json({ message: 'Song not found' });
      return;
    }

    res.json(song);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
// Logic for search bar:
export const searchSongs: RequestHandler = async (req, res) => {
  try {
    const q = String(req.query.q ?? '').trim();

    if (q.length < 2) {
      res.json([]);
      return;
    }

    // escape regex characters so a title like "Ain't (Live)" can't break the query
    const safe = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(safe, 'i');

    const songs = await Song.find({
      $or: [{ title: pattern }, { artist: pattern }],
    }).limit(8);

    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
