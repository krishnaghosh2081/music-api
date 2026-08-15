import {startanalyze } from "../controllers/stem.ts";
import express from "express";
import { validateBody } from '../middleware/validateBody.ts';
import formMiddleWare  from '../middleware/formMiddleWare.ts';
import  cloudUploader  from '../middleware/cloudUploader.ts';
import { z } from "zod";

import { audioInputSchema} from '../models/Audiofile.ts';

const api=express.Router();
   
api.route("/").post(
  formMiddleWare(),
  cloudUploader,
  validateBody({
    querySchema:z.object({}),
    bodySchema:audioInputSchema,
    paramsSchema:z.object({})
  }),startanalyze);

export default api;