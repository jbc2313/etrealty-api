// CRON RELATED IMPORTS
const cron = require('node-cron');
const dotenv = require('dotenv');
dotenv.config()
const cronitor = require('cronitor')(process.env.CRONITOR_KEY)
import { mainCronJob } from './feedandupdate';

// const monitor = new cronitor.Monitor('Test Cron Job');

cronitor.wraps(cron);

export function cronJob() {

    cronitor.schedule('ETrealtyCron','5 * * * * *', ()=> {
        //console.log("CRONITOR/NODE-CRON JOB BABY");
        // monitor.ping({message: 'Alive'});
        // monitor.ping({count: x, error_count: z});
        // x++

         



    });


}
