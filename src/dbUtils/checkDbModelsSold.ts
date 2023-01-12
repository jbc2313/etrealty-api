import prisma from "./prismaClient";
import { getPropertys } from "../utils/fetchPropertys";

// This function will check the models in the db against the Home API
// We will be checking if the home sold, if it sold we will update.

export async function checkSold() {

    const dbModels = await prisma.property.findMany();
    const apiModels = await getPropertys()

    //console.log("DB MODELS => ", dbModels);
    //console.log("API MODELS => ", apiModels);
    
    const totaldb = dbModels.length;
    const totalapi = apiModels.apiProps.length;

    console.log(`total from db = ${totaldb}, total from api = ${totalapi}`);
    
    // prisma models from db
    const dbLastUpdate = dbModels.map((mod: any)=> {
        return {
            id: mod.PropertyId,
            updated: mod.ApiUpdateAt
        }
    })


    // propertys from mls api
    const apiLastUpdate = apiModels.apiProps.map((mod: any)=> {
        return {
            id: mod.property_id,
            updated: mod.last_update_date
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
                // do work to updated db property info here
                console.log("************* NEED TO UPDATE THE DB!!!! *************");
            }
        } else {
            // if no match property is unlisted.. NEED TO UPDATE THE DB INFO AS WELL STATING ITS UNLISTED NOW
            console.log("-------------------------------");
            console.log("NO MATCH (means unlisted now)");
            console.log("######## NEED TO UPDATE THE DB (Property UNLISTED NOW) #########");
        }
   })


}





