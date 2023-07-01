import { checkSold } from '../dbUtils/checkDbModelsSold';
import { feed } from '../utils/feedDb';
import { getPropertys } from "../utils/fetchPropertys";
import { Property } from './property-type';

// cronitor is used to watch this and send updates/emails if this goes down/stops working
//
// This has not been updated for MLS GRID - Currently in progress
//
// THIS IS THE MAIN LOOP THAT FEEDS AND CHECKS DB FOR UPDATES TO OLD DATA
//
const dotenv = require('dotenv');
dotenv.config()
const cronitor = require('cronitor')(process.env.CRONITOR_KEY)

let mainCronJob = cronitor.wrap('etRealty-dbupdate', async function() {
    let data = await getPropertys();
    // need to coerce data into right type here
    let properties: Property[] = await data;

    feed(properties).then(resolved => {
        checkSold(properties);
    }).finally(()=>{
        
    })
});

export default mainCronJob;
