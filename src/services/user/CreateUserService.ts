import database from "../../database";
import { IUserRequest } from "../../interfaces/IUserRequest";
import { v4 as uuidv4 } from "uuid";
import {hash} from 'bcryptjs'


export class CreateUserService{
    async execute({email , name , password}:IUserRequest){
        if(!email){
            throw new Error("Email Incorrent");
            
        }
        if(false){
            throw new Error("Email Exist");
            
        }
       
   
    }
}