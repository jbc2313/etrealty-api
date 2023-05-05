// CRON RELATED IMPORTS
const cron = require('node-cron');
// const dotenv = require('dotenv');
// dotenv.config()
// const cronitor = require('cronitor')(process.env.CRONITOR_KEY)
import mainCronJob from './feedandupdate';



export function cronJob() {

    cron.schedule('0 */3 * * *', ()=> {
        //console.log("CRONITOR/NODE-CRON JOB BABY");
        // monitor.ping({message: 'Alive'});
        // monitor.ping({count: x, error_count: z});
        // x++
        mainCronJob();
    });
}
