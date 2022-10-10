import { Router } from "express";
import { AuthUserController } from "./controllers/AuthUserController";
import { UserController } from "./controllers/UserController";
import { IsAuthenticated } from "./middlewares/ IsAuthenticated";

export const router = Router();

//rota users
router.post('/users' , new UserController().CreateHandle);
router.get('/users' , IsAuthenticated, new UserController().ListHandle)


//rota session
router.post('/session', new AuthUserController().Handle)