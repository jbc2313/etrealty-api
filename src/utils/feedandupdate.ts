import { checkSold } from '../dbUtils/checkDbModelsSold';
import { feed } from '../utils/feedDb';
import { getPropertys } from "../utils/fetchPropertys";
// cronitor is used to watch this and send updates/emails if this goes down/stops working
//
//
//
//
// This has not been updated for MLS GRID
//
// THIS IS THE MAIN LOOP THAT FEEDS AND CHECKS DB FOR UPDATES TO OLD DATA
//
const dotenv = require('dotenv');
dotenv.config()
const cronitor = require('cronitor')(process.env.CRONITOR_KEY)

let mainCronJob = cronitor.wrap('etRealty-dbupdate', async function() {
    let propertys = await getPropertys();
    
    feed(propertys).then(resolved => {
        checkSold(propertys);
    }).finally(()=>{
        
    })
});

export default mainCronJob;
