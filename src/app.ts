import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
// CRON JOB 
import { cronJob } from './utils/nodeCron';

//----------testing--------------

import { test_prep_data } from './__tests__/test_prep_data';
import { test_add_db } from './__tests__/test_add_db';
import { test_upload_s3 } from './__tests__/test_upload_s3';
import { test_read_s3 } from './__tests__/test_read_s3';
//import { test_feed_one_property } from './__tests__/test_feed_one_property';

//-----------endtesting-----------------

import apiRoutes from './api/apiRoutes'
dotenv.config()

const app: Express = express()
const port: number | string = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(apiRoutes)

//======CRON JOBS AND CRONITOR MONITORING=====
// TURNED OFF FOR TESTING ON THIS BRANCH!!!
//cronJob();

//===============================test routes================================================
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "Express with TypeScript! EtRealty API"})
});

app.get('/test', (req: Request, res: Response, next: NextFunction) => {

    //this test checks to see if api data is coerced into Property Type
    
/*
    const test1 = async () => {
        console.log('running test1');
        const info = await test_prep_data();
        //res.json(info);

        // this is to add one property and create the db
        // const addonetodb = await test_feed_one_property(info);
        //res.json(addonetodb);

        const addtodb = await test_add_db(info);
        res.json(addtodb);

    }
    test1();
*/
//test s3 upload


const test2 = async () => {
    console.log('testing s3 upload');
    let result = await test_upload_s3("testfile", "../../testfiles/test.txt");
    res.send(result);
};
test2();



//test s3 get/read image and file, switch in test
/*    
const test3 = async () => {
    console.log('reading from s3');
    let html = await test_read_s3();
    res.send(html);
}
test3();
*/

});
//================end test routes=========================




app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}`)
});
