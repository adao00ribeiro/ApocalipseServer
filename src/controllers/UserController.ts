import { Request , Response } from "express";
import { CreateUserService } from "../services/user/CreateUserService";


export class UserController{
    async CreateHandle(req:Request , res: Response){
       const {email ,name, password}   =    req.body;
       
       const service = new CreateUserService();

       res.json(await service.execute({email , name , password}))
    }
}