import prisma from "./prismaClient";


// this HAS been updated for MLS GRID
// Still needs tested



// p must be the PropertyId
export const findProperty = async (p: any) => {
    
    const result = await prisma.property.findFirst({
        where: {
            ListingId: {
                equals: p.ListingId
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




