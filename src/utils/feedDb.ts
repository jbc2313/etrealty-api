import { getPropertys } from "./fetchPropertys";
import { createProperty } from "../dbUtils/createSingleModel";
import { findProperty } from "../dbUtils/findSingleModel";

//this needs to be a cron job that runs 2 or 3 times a day.
//needs to pull in propertys, check in the db to see if
//they are already in it. if inside the db check the last update
//if data has changed then update the model with new info
//if prop is not in db then add to db
//api calls to db from clientside will be in seperate file

// first get everything working then implement the cron job

let props
let totProps


export const feed = () => {
    getPropertys()
    .then(data => {
        props = data.apiProps;
        totProps = data.totalApiProperty;
        // see if props are already in Db, and handle accordingly
        props.forEach((prop: any)=> {
            findProperty(prop)
            .then(res => {
                if(res === null){
                    createProperty(prop)
                }else{
                    console.log("property already in db")
                    // TODO
                    // need to check last updated date in db with newly fetched property.
                    // if changed need to update that property in db
                }
            })
        })
    })
}
