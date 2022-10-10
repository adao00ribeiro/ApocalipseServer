import { Router } from "express";
import { AuthUserController } from "./controllers/AuthUserController";
import { UserController } from "./controllers/UserController";

export const router = Router();

//rota users
router.post('/users' , new UserController().CreateHandle);



//rota session
router.post('/session', new AuthUserController().Handle)