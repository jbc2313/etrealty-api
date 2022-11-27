import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

//----------testing--------------
import { runTest } from './__tests__/testFetch';
import { runFeed } from './__tests__/testDbCrud';
import { testData } from './__tests__/testApiDataReturn';
import { checkSold } from './dbUtils/checkDbModelsSold';
//-----------endtesting-----------------

import apiRoutes from './api/apiRoutes'
dotenv.config()

const app: Express = express()
const port: number | string = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(apiRoutes)

//=========test routes====================
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "Express with TypeScript! EtRealty API"})
});

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    // this tests fetch of props
    //runTest();
    //this tests feeding db with props
    //runFeed(); // this actually adds property's to db
    
   // testData() // test api returned data 
    checkSold();
    res.json({ msg: "check server for results"})
    
    // this will return a single property from prisma
    // const test = async () => {
    //     const result = await findProperty(298274896)
    //     res.json({ message: result})
    // }
    // test()
});
//================end test routes=========================


app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}`)
});
