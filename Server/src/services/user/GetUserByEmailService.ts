import { RunResult } from 'sqlite3';
import database from '../../database';
import { IUserRequest } from '../../interfaces/IUserRequest';

export class GetUserByEmailService{
    async  execute(email:string){
      
        return await new Promise<RunResult>((resolve, reject) => {
            const sql = "select * from User where email = ?"
            const params = [email]
            database.get(sql, params, function (err: Error, row: RunResult) {
                if (err) {
                    reject(err)
                }
                if (row) {
                    resolve(row)
                } else {
                    reject(new Error("nao existe"))
                }
            })
        })
    }
}