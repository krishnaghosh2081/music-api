import { Router } from "express";
import {getSongs,uploadBasicSongs} from "../controllers/song.ts";


const router = Router();

// GET /api/songs
router.get("/", getSongs);
router.get("/upload-basics", uploadBasicSongs);

export default router;