// New MLSGrid code
import { Property } from './property-type';

// creates the property in the db through prisma
import { createProperty } from '../dbUtils/createSingleProperty';

// checks db for property, if property is there it updates with new info if needed.
// will update based on last update timestap

// check if property is already in db
import { findProperty } from "../dbUtils/findSingleProperty";

//need to create the update function
// update function will take apiprop and dbprop to compare and update info based on timestap
import { updateProperty } from '../dbUtils/updateSingleProperty';


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
    
// this is after initial db feed, ran on a cron job, initial feed is going to be ran differently, with me watching.


    // see if props are already in Db, and handle accordingly
    PropertyArray.forEach((prop: Property)=> {
    // if property is found check check timestamp to see if it needs updated(compare to new info from api)
        findProperty(prop).then(res => {
            if(res){
                //dbprop was found
                let dbprop = res;
                
                //check if dbprop needs updated and typescript null checking
                if(dbprop != null){
                    if(dbprop.ModificationTimestamp != null){
                        if(prop.ModificationTimestamp > dbprop.ModificationTimestamp){
                            // Timestamp is new from api, so db needs updated.
                            updateProperty(prop, dbprop).then((res:any)=>{
                                console.log(`dbproperty updated from previous timestamp of ${dbprop.ModificationTimestamp} to ${prop.ModificationTimestamp}`); 
                                console.log(res);
                            })
                            
                        }else{
                            // no update is needed at this time. 
                            console.log("no update was needed at this time");
                        }
                    };
                }
            }else{
                // not found in DB already, create Property in DB
                createProperty(prop).then((res: any)=>{
                    // result of creation
                    console.log(res);
                })
            }
        })
    });

    

};
