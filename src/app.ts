import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { runTest } from './testFetch';

dotenv.config()

const app: Express = express()
const port: number | string = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "Express with TypeScript!"})
});

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    runTest();
    res.json({ message: "Test was ran, check server"})
});

app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}`)
});
