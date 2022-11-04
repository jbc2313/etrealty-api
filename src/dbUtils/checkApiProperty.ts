export function checkProp(prop: any) {
    const p = prop.map((p: any) => p) 
    const preProp = {
        PropertyId: p?.property_id,
        ApiUpdateAt: p?.last_update_date,
        Tags: p?.tags,
        PermLink: p?.permalink,
        Status: p?.status,
        ListDate: p?.list_date,
        Branding: p?.branding[0].name,
        Photos: p?.photos,
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
}
