import { Request, Response } from 'express'
import { AuthUserService } from '../services/user/AuthUserService';
export class AuthUserController {

    async Handle(req: Request, res: Response) {
        const { email, password } = req.body;
        const service = new AuthUserService();
        return res.json(await service.execute({ email, password }))
    }
}