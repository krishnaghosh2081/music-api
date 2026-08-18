

import express from "express";
import { z } from "zod";

import {getUsers,createUser,getUserById,updateUser,deleteUser, login} from "../controllers/user.ts";
import { userInputSchema,userParmSchema, userLoginSchema } from '../models/User.ts';
import { validateBody } from '../middleware/validateBody.ts';

const api=express.Router();
   
api.route("/").get(getUsers);
api.route("/").post(
  validateBody({
    querySchema: z.object({}),
    bodySchema: userInputSchema,
    paramsSchema: z.object({}),
  }),
  createUser
);

api.route("/login").post(
  validateBody({
    querySchema: z.object({}),
    bodySchema: userLoginSchema,
    paramsSchema: z.object({}),
  }),
  login
);

api.route("/:id").get(
  validateBody({
    querySchema: z.object({}),
    bodySchema: z.unknown(),
    paramsSchema: userParmSchema
  }),getUserById);
api.route("/:id").put(
  validateBody({
    querySchema: z.object({}),
    bodySchema: userInputSchema,
    paramsSchema: userParmSchema
  }),updateUser);
api.route("/:id").delete(
  validateBody({
    querySchema: z.object({}),
    bodySchema: z.unknown(),
    paramsSchema: userParmSchema
  }),deleteUser);

export default api;