import prisma from "./prismaClient";
import { getPropertys } from "../utils/fetchPropertys";
import { updateInfo } from "./updateDbModel";
import { unlistModel } from "./unlistDbModel";




// might not need this anymore since MLSGRID uses a last updated key/value
// this has not been updated for MLS GRID



// This function will check the models in the db against the Home API
// We will be checking if the home sold, if it sold we will update.

export async function checkSold(properties: any) {

    const dbModels = await prisma.property.findMany();
    //const apiModels = await getPropertys()
    const apiModels = properties

    //console.log("DB MODELS => ", dbModels);
    //console.log("API MODELS => ", apiModels);
    
    const totaldb = dbModels.length;
    const totalapi = apiModels.apiProps.length;

    console.log(`total from db = ${totaldb}, total from api = ${totalapi}`);
    
    // prisma models from db
    const dbLastUpdate = dbModels.map((mod: any)=> {
        return {
            id: mod.PropertyId,
            updated: mod.ApiUpdateAt,
            status: mod.Status
        }
    })


    // propertys from mls api
    const apiLastUpdate = apiModels.apiProps.map((mod: any)=> {
        return {
            id: mod.property_id,
            updated: mod.last_update_date,
            status: mod.status
        }
    });


   dbLastUpdate.map((el: any) => {
        console.log(`db info\n=======\nID: ${el.id}\nUpdated: ${el.updated}\n========\n`);
   });
   apiLastUpdate.map((el: any) => {
        console.log(`api info\n=======\nID: ${el.id}\nUpdated: ${el.updated}\n========\n`);
   });
     

   // Need to compare the dates on the API update to the DB update
   // if the times do not match, mark the id in a list of models that need to be updated for double checking
   
   // lists of updated dates for db and api
   const dbList = dbLastUpdate.map((el: any) => {
        return el.updated
   })
   const apiList = apiLastUpdate.map((el:any) => {
        return el.updated
   })


   console.log(`db size = ${dbList.length}, api size = ${apiList.length}`);

   // list of propertys in db that need to be updated. the rest need to be marked unlisted.
   // able to view what is unlisted and what needs to be updated.
   
   // list of db models id's that need to be updated

   const dbUpdateList: any = [];
   const dbUnlistList: any = [];

   dbLastUpdate.map((el:any) => {
        const id = el.id;
        const updatedDate = el.updated;
        const match = apiLastUpdate.filter((prop:any) => prop.id === id);
        if(match.length != 0){
            // if matched id's updated time is different need to update the info in the db property
            console.log("===========");
            console.log(`Found a match for ${id}`)
            console.log(`match id:${match[0].id}, db id: ${id}`);
            console.log(`match updated:${match[0].updated}, db updated:${updatedDate}`);
            if(updatedDate !== match[0].updated) {
                // add to update list
                dbUpdateList.push(id);
                console.log("************* NEED TO UPDATE THE DB!!!! *************");
                // pass in all db propertys and api propertys to a FUNCTION, with the list of db propertys
                // that need to be updated
                // pass in dbModels, and apiModels
            }
        } else {
            // add id to unlist list
            if (el.status === "Unlisted"){
                console.log("DB model already is Unlisted");
            }else{
                dbUnlistList.push(id);
                // if no match property is unlisted.. NEED TO UPDATE THE DB INFO AS WELL STATING ITS UNLISTED NOW
                console.log("-------------------------------");
                console.log("NO MATCH (means unlisted now)");
                console.log("######## NEED TO UPDATE THE DB (Property UNLISTED NOW) #########");
                // FUNCTION TO UNLIST DB MODEL BECAUSE API SAID IT IS UNLISTED
                // Pass in a list of db models ID's that need to be unlisted.
            }
        }
   })

   // do work on models in DB now.
    console.log("======Work in Db begins=====");
   //this updates the db model with new info from api
   console.log("list of update id's");
   dbUpdateList.forEach((el:any) => {
        console.log(el);
   })
   // UPDATE DB HERE (update info)
   updateInfo(dbModels, apiModels, dbUpdateList);

   //this updates the models in the db to have the status Unlisted
   if(dbUnlistList > 0) {
       console.log("list of unlist id's");
       dbUnlistList.forEach((el:any) => {
            console.log(el);
       })
       // UPDATE DB HERE (unlist model here)
       unlistModel(dbUnlistList);
   }else{
        console.log("NO DB MODELS NEED UNLISTED, ALL UP TO DATE");
   }


}





