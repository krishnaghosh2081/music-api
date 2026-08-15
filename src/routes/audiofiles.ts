import { Router } from "express";
import {getAllAudioFiles,getProcessedAudioFiles,createAudio,getAudioFileById,deleteAudiofile} from "../controllers/audiofile.ts";


const router = Router();


router.get("/", getAllAudioFiles).post("/",createAudio).get("/:id",getAudioFileById).delete("/:id",deleteAudiofile);
router.get("/getAllProcessed", getProcessedAudioFiles);

export default router;