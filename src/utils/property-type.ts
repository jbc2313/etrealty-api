export type Property = {
    ListingId: string //Prisma @id
    Utilities: string //JSON in Prisma
    HMS_SaleOptions: string
    PossibleUse: string //JSON in Prisma
    GreenEnergyEfficient: string //JSON in Prisma
    LotSizeDimensions: string
    Zoning: string
    RoadSurfaceType: string //JSON in Prisma
    VirtualTourURLUnbranded: string //JSON in Prisma
    WindowFeatures: string //JSON in Prisma
    HMS_Telecom: string
    SecurityFeatures: string //JSON in Prisma
    AssociationFeeIncludes: string //JSON in Prisma
    HMS_InsideCityLimits: string
    OwnershipType: string
    Appliances: string //JSON in Prisma
    RoadResponsibility: string //JSON in Prisma
    BuilderModel: string
    AssociationAmenities: string //JSON in Prisma
    CoListAgentFullName: string
    CoListAgentMlsId: string
    CoListOfficeName: string
    CoListOfficePhone: string
    YearBuilt: number
    Flooring: string //JSON in Prisma
    Possession: string //JSON in Prisma
    AssociationFeeFrequency: string
    HMS_WarrantyDescription: string
    InteriorFeatures: string //JSON in Prisma
    PatioAndPorchFeatures: string //JSON in Prisma
    RoomsTotal:number
    HighSchool: string
    MiddleOrJuniorSchool: string
    ArchitecturalStyle: string //JSON in Prisma
    BuilderName: string
    ElementarySchool: string
    FireplaceFeatures: string //JSON in Prisma
    LaundryFeatures: string //JSON in Prisma
    LotFeatures: string //JSON in Prisma
    PropertyCondition: string //JSON in Prisma
    FireplacesTotal: number
    AboveGradeFinishedArea: number
    AboveGradeFinishedAreaUnits: string
    BelowGradeFinishedArea: number
    BelowGradeFinishedAreaUnits: string
    GarageSpaces:number
    Basement: string //JSON in Prisma
    BasementYN: boolean
    BathroomsFull: number
    BathroomsHalf: number
    BedroomsTotal: number
    Cooling: string //JSON in Prisma
    CoolingYN: boolean
    FireplaceYN: boolean
    GarageYN: boolean
    HMS_BathroomsTotalDecimal: string
    HMS_ExclusionsYN: string
    HMS_FloorPlanFeatures: string
    Heating: string //JSON in Prisma
    LivingArea:number
    Ownership: string
    Roof: string //JSON in Prisma
    LotSizeArea: number
    LotSizeSquareFeet:number
    ParkingFeatures: string //JSON in Prisma
    LotSizeUnits: string
    HMS_AgeDescription: string
    AssociationFee: number
    HMS_LegalDescription: string
    SubAgencyCompensationType: string
    HMS_MaintenanceProvidedYN: string //array, grab index 0
    HighSchoolDistrict: string
    Sewer: string //array, grab index 0
    SubdivisionName: string
    WaterSource: string //this comes in as an array, grab index 0
    Directions: string  // JSON in Prisma
    StreetNumber: string
    HMS_InFloodPlain: string
    HMS_TaxTotalAmount: string
    PropertySubType: string
    odataid: string
    BuyerAgencyCompensation: string
    BuyerAgencyCompensationType: string
    City: string
    CountyOrParish: string
    InternetAddressDisplayYN: boolean
    InternetEntireListingDisplayYN: boolean
    ListAgentDirectPhone: string
    ListAgentFullName: string
    ListAgentKey: string
    ListAgentMlsId: string
    ListOfficeKey: string
    ListOfficeMlsId: string
    ListOfficeName: string
    ListOfficePhone: string
    ListPrice: number
    ListingAgreement: string
    ListingContractDate: string
    ListingKey: string
    ListingTerms: string //JSON in Prisma
    MLSAreaMajor: string
    MlgCanUse: string //JSON in Prisma
    MlgCanView: boolean
    MlsStatus: string
    ModificationTimestamp: string
    OriginatingSystemName: string
    ParcelNumber: string
    PhotosChangeTimestamp: string
    PhotosCount: number
    PostalCode: string
    PropertyType: string
    PublicRemarks: string  //JSON in Prisma
    StandardStatus: string
    StateOrProvince: string
    StreetName: string
    StreetSuffix: string
    SubAgencyCompensation: string

}
