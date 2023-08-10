// New MLSGrid code
import { Property } from './property-type';

// creates the property in the db through prisma
import { createProperty } from "../dbUtils/createSingleProperty";

// checks db for property, if property is there it updates with new info if needed.
// will update based on last update timestap

// check if property is already in db
import { findProperty } from "../dbUtils/findSingleProperty";

//need to create the update function
// update function will take apiprop and dbprop to compare and update info based on timestap



// IS updated for MLS GRID

// this needs to be a cron job that runs 2 or 3 times a day.
//needs to pull in propertys, check in the db to see if
//they are already in it. if inside the db check the last update
//if data has changed then update the model with new info
//if prop is not in db then add to db
//api calls to db from clientside will be in seperate file

// first get everything working then implement the cron job

export const feed = async (PropertyArray: Property[]) => {
   
// NEW CODE -----------------------------------------------------------------------------------
    

    // see if props are already in Db, and handle accordingly
    //PropertyArray.forEach((prop: Property)=> {
    // if property is found check check timestamp to see if it needs updated(compare to new info from api)
    //   let dbprop = await findProperty(prop).then(res => {
    //      if(res){
    //          found = true;
    //          return res;
    //      }
    //   })
    //   if(found){
    //      updateDB(dbprop, prop); 
    //
    //   }
    //});

    // is already in db will go here


//OLD CODE ----------------------------------------------------------------------------

    // if not in db
    //
    PropertyArray.forEach((prop: Property)=> {
        let status; 
        createProperty(prop).then(resolved => {
            console.log(resolved);
            status = resolved;
        })
        console.log("property already in db")
       

        return status;
        // need to check last updated date in db with newly fetched property.
        // if changed need to update that property in db

        // THIS PROBABLY NEEDS TO BE AN ANSYNC FUNCTION OR PROMISE
        // REALY MESSED UP HERE, I MADE THIS FUNCTION USE ALL API DATA INSTEAD OF SINGLE PROP 
        //checkProp();
    });
};
