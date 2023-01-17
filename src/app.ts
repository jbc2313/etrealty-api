import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

//----------testing--------------
import { runTest } from './__tests__/testFetch';
import { runFeed } from './__tests__/testDbCrud';
import { testData } from './__tests__/testApiDataReturn';
import { findProperty } from './dbUtils/findSingleModel';
import { runCheckTest } from './__tests__/testCheckProp';
import { cronJob } from './utils/nodeCron';
//-----------endtesting-----------------

import apiRoutes from './api/apiRoutes'
dotenv.config()

const app: Express = express()
const port: number | string = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(apiRoutes)

//======CRON JOBS AND CRONITOR MONITORING=====
//cronJob();

//=========test routes====================
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "Express with TypeScript! EtRealty API"})
});

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    // this tests fetch of props
    //runTest();
    //this tests feeding db with props
    runFeed(); // this actually adds property's to db
    
    // testData() // test mls api returned data against DB
    //runCheckTest(); //checks if prop in db is sold 
    res.json({ msg: "check server for results"})
    
    // this will return a single property from prisma
    // const propertyObject = { 
    //     property_name: "test_home", 
    //     property_id: "8888209488", 
    // }
    // const test = async () => {
    //      const result = await findProperty(propertyObject)
    //      res.json({ message: result})
    // }
    // test()
});
//================end test routes=========================


app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}`)
});
