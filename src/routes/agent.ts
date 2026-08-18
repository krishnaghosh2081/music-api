

import express from "express";
import {getMessage} from "../controllers/agent.ts";

const api=express.Router();
   
api.route("/").post(getMessage);

export default api;