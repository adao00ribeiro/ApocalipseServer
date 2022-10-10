import { IUserRequest } from "../../interfaces/IUserRequest";




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