import { checkSold } from '../dbUtils/checkDbModelsSold';
import { feed } from '../utils/feedDb';
import { getPropertys } from "../utils/fetchPropertys";
// cronitor
const dotenv = require('dotenv');
dotenv.config()
const cronitor = require('cronitor')(process.env.CRONITOR_KEY)

let mainCronJob = cronitor.wrap('ETrealty-dbfeed-dbupdate', async function() {
    let propertys = await getPropertys();
    
    feed(propertys).then(resolved => {
        checkSold(propertys);
    }).finally(()=>{
        
    })
});

export default mainCronJob;
