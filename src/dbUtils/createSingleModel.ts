import prisma from "./prismaClient"


export const createProperty = (p: any) => {
//these 2 function deal with Prisma Model not allowing null in these 2 rows
    const pPhotos = p.photos.map((p: any) => {
        if(p.href === undefined || p.href === null){
            return "no photo available"
        }
        return p.href
    })
    const pTags = p.tags.map((t: any) => {
        if(t === undefined || t === null){
            return "no tag"
        }
        return t
    })
//create the propertys
    prisma.property.create({
        data: {
            PropertyId: p.property_id,
            ApiUpdateAt: p.last_update_date,
            Tags: pTags,
            PermLink: p.permalink,
            Status: p.status,
            ListDate: p.list_date,
            Branding: p.branding[0].name,
            Photos: pPhotos,
            ListPrice: p.list_price,
            YearBuilt: p.description.year_built,
            BathsFull: p.description.baths_full,
            BathsHalf: p.description.baths_half,
            Baths: p.description.baths,
            LotSqft: p.description.lot_sqft,
            Sqft: p.description.sqft,
            Garage: p.description.garage,
            Stories: p.description.stories,
            Beds: p.description.beds,
            PropertyType: p.description.type,
            ListingId: p.listing_id,
            PostalCode: p.location.address.postal_code,
            State: p.location.address.state,
            Longitude: p.location.address.coordinate.lon,
            Latitude: p.location.address.coordinate.lat,
            City: p.location.address.city,
            StateCode: p.location.address.state_code,
            Address: p.location.address.line,
            County: p.location.county.name
        }
    })
    .then(res => {
        console.log("Property was created in Db.")
    })

}
