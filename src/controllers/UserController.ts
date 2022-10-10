import { Request, Response } from "express";
import { CreateUserService } from "../services/user/CreateUserService";
import { ListUserService } from "../services/user/ListUserService";


export class UserController {

    async CreateHandle(req: Request, res: Response) {
        const { email, name, password } = req.body;

        const service = new CreateUserService();

        res.json(await service.execute({ email, name, password }))
    }

    async ListHandle(req: Request, res: Response) {
        const service = new ListUserService();
        res.json(await service.execute())
    }
}