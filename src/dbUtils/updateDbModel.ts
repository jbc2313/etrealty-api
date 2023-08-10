// OLD FILE DO NOT USE


import prisma from "./prismaClient";
import { checkProp } from "./checkApiProperty";


// this has not been updated for MLS GRID


export async function updateInfo(dbArr: any, apiArr: any, dbList: any) {
    console.log("LIST OF IDS NEED UPDATED");
    console.log(dbList);
    //console.log("DB ARRAY BELOW"); 
    //console.log(dbArr);
   // console.log('-------------');
    //console.log("API ARRAY BELOW");
    //console.log(apiArr);
    
    for (const el of dbList) {
        //console.log("From for loop:"); 
        //console.log(el); 
        
        const newInfo = apiArr.apiProps.filter((record: any)=> record.property_id === el )
        //console.log("## NEW API INFO ##");
        //console.log(newInfo);
        const preparedInfo = await checkProp(newInfo[0])
        //console.log(preparedInfo);

        // Code to update db property
        prisma.property.update({
            where: { PropertyId: el },
            data: {
                ApiUpdateAt: preparedInfo.ApiUpdateAt,
                ListPrice: preparedInfo.ListPrice,
                Status: preparedInfo.Status,
                ListDate: preparedInfo.ListDate,
                Photos: preparedInfo.Photos,
            }
        }).then(returned => console.log("**db model updated**"));

    }



    console.log("##**##UPDATED DB INFO WITH NEW INFO FROM API");
}
