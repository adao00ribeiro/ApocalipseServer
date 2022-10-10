import { IAuthRequest } from "../../interfaces/IAuthRequest";
import { GetUserByEmailService } from "./GetUserByEmailService";
import { compare } from 'bcryptjs';
import {  sign} from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()
export class AuthUserService{
    async execute ({email , password }: IAuthRequest){
        const serviceGetUser = new GetUserByEmailService(); 
                
        const user = await serviceGetUser.execute(email) ; 
        if (!user) {
            throw new Error("Email nao existe");
        }
        const passwordMatch = await compare(password, user['password']);
        if (!passwordMatch) {
            throw new Error("Senha Incorreta");
        }
       
        const token = sign(
            {
                name: user['name'],
                email: user['email']
            },
        
            process.env.JWT_SECRET,
            {
                subject: user['id'],
                expiresIn: '30d'
            }
        )

        return {
            id: user['id'],
            name: user['name'],
            email: user['email'],
            token: token
        }
        
      
    }
}