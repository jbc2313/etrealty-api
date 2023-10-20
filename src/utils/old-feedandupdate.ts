//import { checkSold } from '../dbUtils/checkDbModelsSold';

import { feed } from '../utils/feedDb';
import { Property } from './property-type';

// wrap these two into one function
//import { getPropertys } from "../utils/fetchPropertys";
//import { coerceProperty } from './coercePropertyType';

import { prepApiData } from './prepareData';

// cronitor is used to watch this and send updates/emails if this goes down/stops working
//
// This has not been updated for MLS GRID - Currently in progress
//
// THIS IS THE MAIN LOOP THAT FEEDS, AND CHECKS DB FOR UPDATES TO OLD DATA
//
// MAIN FUNCTION
//


const dotenv = require('dotenv');
dotenv.config()
const cronitor = require('cronitor')(process.env.CRONITOR_KEY)

let mainCronJob = cronitor.wrap('etRealty-dbupdate', async function() {

    //let propertyArray: Property[] = await prepApiData();


    // need to update feed function to accept Property[] type
    //feed(properties).then(resolved => {
        // dont think this is neccassarry anymore
       // checkSold(properties);
    //}).finally(()=>{
        
    })
//});

export default mainCronJob;
