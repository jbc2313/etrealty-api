import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app: Express = express()
const port: number | string = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "Express with TypeScript!"})
});

app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}`)
});
