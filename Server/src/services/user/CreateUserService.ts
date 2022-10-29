import {RunResult} from 'sqlite3';
import database from "../../database";
import { IUserRequest } from "../../interfaces/IUserRequest";
import { v4 as uuidv4 } from "uuid";
import {hash} from 'bcryptjs'
import { ExistUserByEmailService } from './ExistUserByEmailService';


export class CreateUserService{
    async execute({email , name , password}:IUserRequest){
        if(!email){
            throw new Error("Email Incorrent");
            
        }
        if(await new ExistUserByEmailService().execute(email)){
            throw new Error("Email Exist");
        }
        const hashpassword = await hash(password, 8);
       return await new Promise<Number> ((resolve, reject)=>{
        const sql = "INSERT INTO User (id,email,name,password) VALUES (?,?, ?, ?)";

        const params = [uuidv4(), email, name, hashpassword]
        database.run(sql, params, function (this: RunResult, _err: Error) {
            if (_err) {
                reject(_err)
            }
            resolve(this?.lastID)
        })

       })
   
    }
}