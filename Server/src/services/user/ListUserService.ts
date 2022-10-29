import { RunResult } from "sqlite3";
import database from "../../database";

export class ListUserService {
    async execute() {

        return await new Promise<RunResult>((resolve, reject) => {
            const sql = 'select * from User';
            const params: RunResult[] = []
            database.get(sql, params, (err: Error, rows: RunResult) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            });
        })
    }
}