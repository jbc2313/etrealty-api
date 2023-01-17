const cron = require('node-cron');
const cronitor = require('cronitor')(env)

export function cronJob() {

    cron.schedule('5 * * * * *', ()=> {
        console.log("CRON JOB BABY");

    });


}
