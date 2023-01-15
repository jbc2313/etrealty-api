import prisma from "./prismaClient";


export async function updateInfo(dbArr: any, apiArr: any, dbList: any) {
    console.log("LIST OF IDS NEED UPDATED");
    console.log(dbList);
    //console.log("DB ARRAY BELOW"); 
    //console.log(dbArr);
    console.log('-------------');
    //console.log("API ARRAY BELOW");
    console.log(apiArr);
    
    for (const el of dbList) {
        console.log("From for loop:"); 
        console.log(el); 
        
        const newInfo = apiArr.apiProps.filter((record: any)=> record.property_id === el )
        console.log("## NEW API INFO ##");
        console.log(newInfo);

        // Code to update db property
        // prisma.property.update({
        //     where: { PropertyId: el },
        //     data: {
        //         ApiUpdateAt:
        //     }
        // })

        console.log("##**##UPDATED DB INFO WITH NEW INFO FROM API");


    }



}
