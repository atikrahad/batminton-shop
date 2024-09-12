import express, { Request, Response } from 'express';
import cors from "cors"
const app = express();

app.use(cors())
app.use(express.json())

// ======= Api end point============

app.get("/", (req: Request, res: Response) => {
    res.send("server is running")
})
export default app;