import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken";

import dotenv from 'dotenv';
dotenv.config()
export function IsAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authtoken = req.headers.authorization;

    if (!authtoken) {
        return res.status(401).end();
    }
    
    return res.json(authtoken)

}