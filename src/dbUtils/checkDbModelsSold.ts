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
        return mod.ApiUpdateAt;
    })

    const dbPropId = dbModels.map((mod: any) => {
        return mod.PropertyId;
    });

    // propertys from mls api
    const apiLastUpdate = apiModels.apiProps.map((mod: any)=> {
        return mod.last_update_date;
    });

    const apiPropId = apiModels.apiProps.map((mod:any) => {
        console.log(mod);
    });

    console.log(`db list = ${dbLastUpdate}, api list = ${apiLastUpdate}`)
    
     
}





