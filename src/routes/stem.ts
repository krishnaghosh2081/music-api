import {startanalyze } from "../controllers/stem.ts";
import express from "express";

const api=express.Router();
   
api.route("/").post(startanalyze);

export default api;