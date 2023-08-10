// New version of updateDbmodel.ts


import { Property } from '../utils/property-type';
import { Property } from "@prisma/client";
import prisma from "./prismaClient";


// Still needs tested



export const findProperty = async (Property: Property) => {
    
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



