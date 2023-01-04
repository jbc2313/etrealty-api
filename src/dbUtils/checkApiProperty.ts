export async function checkProp(prop: any) {
    const p = prop
    // console.log("arg passed in funcion", prop)
    // used for testing
    //  p.list_price = undefined

    //console.log("return obj from arg map", p)

// CONFORMS DATA TO PRISMA MODEL
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

    const preProp: {[key: string]: any} = {
        PropertyId: p?.property_id,
        ApiUpdateAt: p?.last_update_date,
        Tags: pTags,
        PermLink: p?.permalink,
        Status: p?.status,
        ListDate: p?.list_date,
        Branding: p?.branding[0].name,
        Photos: pPhotos,
        ListPrice: p?.list_price,
        YearBuilt: p?.description?.year_built,
        BathsFull: p?.description?.baths_full,
        BathsHalf: p?.description?.baths_half,
        Baths: p?.description?.baths,
        LotSqft: p?.description?.lot_sqft,
        Sqft: p?.description?.sqft,
        Garage: p?.description?.garage,
        Stories: p?.description?.stories,
        Beds: p?.description?.beds,
        PropertyType: p?.description?.type,
        ListingId: p?.listing_id,
        PostalCode: p?.location?.address?.postal_code,
        State: p?.location?.address?.state,
        Longitude: p?.location?.address?.coordinate?.lon,
        Latitude: p?.location?.address?.coordinate?.lat,
        City: p?.location?.address?.city,
        StateCode: p?.location?.address?.state_code,
        Address: p?.location?.address?.line,
        County: p?.location?.county?.name
    }

    //console.log("checked property before undefined check =>>>", preProp);
    
    // this was me trying to figure out TypeScript, I had to add a type to preProp
    // Object.entries(preProp).forEach(([key, value]) => {
    //     if(value === undefined){
    //         const x: any = key;
    //         preProp[x] = null
    //     }
    // })


    for(const key in preProp){
        if(preProp.hasOwnProperty(key)){
           if(preProp[key] === undefined){
                console.log(`${key}: ${preProp[key]} is undefined and needs to be updated null for prisma!!`);
                preProp[key] = null
           }
        }
    }

    //console.log("AFTER FIX ===>>>>", preProp);

    return preProp

}
