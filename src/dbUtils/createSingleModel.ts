import prisma from "./prismaClient"


export const createProperty = (p: any) => {
//these 2 function deal with Prisma Model not allowing null in these 2 rows
// I moved this to a different place
    // const pPhotos = p.photos.map((p: any) => {
    //     if(p.href === undefined || p.href === null){
    //         return "no photo available"
    //     }
    //     return p.href
    // })
    // const pTags = p.tags.map((t: any) => {
    //     if(t === undefined || t === null){
    //         return "no tag"
    //     }
    //     return t
    // })


//create the propertys
    prisma.property.create({
        data: {
            PropertyId: p.PropertyId,
            ApiUpdateAt: p.ApiUpdateAt,
            Tags: p.Tags,
            PermLink: p.PermLink,
            Status: p.Status,
            ListDate: p.ListDate,
            Branding: p.Branding,
            Photos: p.Photos,
            ListPrice: p.ListPrice,
            YearBuilt: p.YearBuilt,
            BathsFull: p.BathsFull,
            BathsHalf: p.BathsHalf,
            Baths: p.Baths,
            LotSqft: p.LotSqft,
            Sqft: p.Sqft,
            Garage: p.Garage,
            Stories: p.Stories,
            Beds: p.Beds,
            PropertyType: p.PropertyType,
            ListingId: p.ListingId,
            PostalCode: p.PostalCode,
            State: p.State,
            Longitude: p.Longitude,
            Latitude: p.Latitude,
            City: p.City,
            StateCode: p.StateCode,
            Address: p.Address,
            County: p.County
        }
    })
    .then(res => {
        console.log("Property was created in Db.")
    })

}
