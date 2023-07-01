import { createProperty } from "../dbUtils/createSingleModel";
import { findProperty } from "../dbUtils/findSingleModel";

// probably dont need this anymore, since mlsgrid is better api
//import { checkProp } from "../dbUtils/checkApiProperty";

// THIS has not been updated for MLS GRID

// this needs to be a cron job that runs 2 or 3 times a day.
//needs to pull in propertys, check in the db to see if
//they are already in it. if inside the db check the last update
//if data has changed then update the model with new info
//if prop is not in db then add to db
//api calls to db from clientside will be in seperate file

// first get everything working then implement the cron job

export const feed = async (propertys: any) => {
    props = propertys.apiProps;
    totProps = propertys.totalApiProperty;
    // see if props are already in Db, and handle accordingly
    const x = await props.forEach((prop: any)=> {
        findProperty(prop)
        .then(res => {
            if(res === null){
                checkProp(prop)
                .then((p: any) => {
                    createProperty(p)
                })
            }else{
                console.log("property already in db")
                // TODO
                // need to check last updated date in db with newly fetched property.
                // if changed need to update that property in db

                // THIS PROBABLY NEEDS TO BE AN ANSYNC FUNCTION OR PROMISE
                // REALY MESSED UP HERE, I MADE THIS FUNCTION USE ALL API DATA INSTEAD OF SINGLE PROP 
                //checkProp();
            }
        })
    })
}
