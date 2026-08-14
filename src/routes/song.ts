import { Router } from 'express';
import {
  getSongs,
  uploadBasicSongs,
  getSongById,
} from '../controllers/song.ts';

const router = Router();

// GET /api/songs
router.get('/', getSongs);
router.get('/upload-basics', uploadBasicSongs);
router.get('/:id', getSongById);
export default router;
