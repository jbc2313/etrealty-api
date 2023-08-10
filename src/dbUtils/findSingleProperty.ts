import prisma from "./prismaClient";


// this HAS been updated for MLS GRID
// Still needs tested


import { DProperty } from "@prisma/client";
import { Property } from '../utils/property-type';




// p must be the PropertyId
export const findProperty = async (p: Property) => {
    
    const result = prisma.dProperty.findFirst({
        where: {
            ListingId: {
                equals: p.ListingId
            }
        }
    }).then(res => {
        console.log("res from db search",res)
        if(!res){
            return null;
       }else{
            return res;
       }
    })
    return result
}



