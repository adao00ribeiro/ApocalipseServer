import database from "../../database"
import { IUserRequest } from "../../interfaces/IUserRequest"

export class ExistUserByEmailService{
    async execute(email:string){
        return await new Promise<boolean>((resolve, reject) => {
            const sql = "select email from User where email = ?"
            const params = [email]
            database.get(sql, params, function (_err: Error, row?: IUserRequest) {
                if (_err) {
                    reject(_err)
                }
                resolve(row !== undefined)
            })
        })
    }
}