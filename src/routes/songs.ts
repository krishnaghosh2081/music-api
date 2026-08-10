import { Router } from "express";
import { Song } from "../models/Song.ts";

const router = Router();

// GET all songs
router.get("/", async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;