import { Router } from "express";
import Song from "../models/Song";

const router = Router();

// GET /api/songs
router.get("/", async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;