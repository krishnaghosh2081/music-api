import { Router } from "express";
import {getRecordings,createRecordings,getRecordingById,deleteRecording} from "../controllers/recording.ts";
import fs from 'fs';
import path from 'path';
import multer from 'multer';

const router = Router();

const uploadDir = path.join(process.cwd(), 'upload');


    // make sure upload folder exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    const storage = multer.diskStorage({
        destination: uploadDir,
        filename: (req , file, cb) => {
            // Generate a unique file name to prevent accidental overwrites
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, `recording-${uniqueSuffix}.mp3`);
        }
});

const upload = multer({ storage: storage });

router.get("/", getRecordings).get("/:id",getRecordingById).delete("/:id",deleteRecording).post("/",upload.single('audio'),createRecordings);

export default router;