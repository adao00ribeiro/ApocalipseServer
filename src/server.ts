import express, { Request, Response, NextFunction }from "express";
import 'express-async-errors'
import cors from "cors";
import { router } from "./routes";

const PORT = process.env.PORT || 3333
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(router)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: "error",
        message: "internal server error"
    })
})
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})  