import { Router } from 'express';
import {
  getSongs,
  uploadBasicSongs,
  getSongById,
  searchSongs,
} from '../controllers/song.ts';

const router = Router();

// GET /api/songs
router.get('/', getSongs);
router.get('/upload-basics', uploadBasicSongs);
router.get('/search', searchSongs);
router.get('/:id', getSongById);
export default router;
