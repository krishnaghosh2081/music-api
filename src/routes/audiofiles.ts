import { Router } from "express";
import {getAllAudioFiles,getProcessedAudioFiles,createAudio,getAudioFileById,deleteAudiofile} from "../controllers/audiofile.ts";


const router = Router();


router.get("/", getAllAudioFiles).get("/getAllProcessed", getProcessedAudioFiles).post("/",createAudio).get("/:id",getAudioFileById).delete("/:id",deleteAudiofile);
export default router;