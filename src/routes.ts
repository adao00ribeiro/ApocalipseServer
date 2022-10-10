import { Router } from "express";
import { UserController } from "./controllers/UserController";

export const router = Router();

//rota users
router.post('/users' , new UserController().CreateHandle);