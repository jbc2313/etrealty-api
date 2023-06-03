import prisma from "./prismaClient";


// this has not been updated for MLS GRID



// p must be the PropertyId
export const findProperty = async (p: any) => {
    
    const result = await prisma.property.findFirst({
        where: {
            PropertyId: {
                equals: p.property_id
            }
        }
    })
    .then(res => {
        console.log("res from db search",res)
        if(!res){
            return null;
       }else{
            return res;
       }
    })
    return result
}




