export type Property = {
    ListingId: String //Prisma @id
    Utilities: String //JSON in Prisma
    HMS_SaleOptions: String
    PossibleUse: String //JSON in Prisma
    GreenEnergyEfficient: String //JSON in Prisma
    LotSizeDimensions: String
    Zoning: String
    RoadSurfaceType: String //JSON in Prisma
    VirtualTourURLUnbranded: String //JSON in Prisma
    WindowFeatures: String //JSON in Prisma
    HMS_Telecom: String
    SecurityFeatures: String //JSON in Prisma
    AssociationFeeIncludes: String //JSON in Prisma
    HMS_InsideCityLimits: String
    OwnershipType: String
    Appliances: String //JSON in Prisma
    RoadResponsibility: String //JSON in Prisma
    BuilderModel: String
    AssociationAmenities: String //JSON in Prisma
    CoListAgentFullName: String
    CoListAgentMlsId: String
    CoListOfficeName: String
    CoListOfficePhone: String
    YearBuilt: Number
    Flooring: String //JSON in Prisma
    Possession: String //JSON in Prisma
    AssociationFeeFrequency: String
    HMS_WarrantyDescription: String
    InteriorFeatures: String //JSON in Prisma
    PatioAndPorchFeatures: String //JSON in Prisma
    RoomsTotal: Number
    HighSchool: String
    MiddleOrJuniorSchool: String
    ArchitecturalStyle: String //JSON in Prisma
    BuilderName: String
    ElementarySchool: String
    FireplaceFeatures: String //JSON in Prisma
    LaundryFeatures: String //JSON in Prisma
    LotFeatures: String //JSON in Prisma
    PropertyCondition: String //JSON in Prisma
    FireplacesTotal: Number
    AboveGradeFinishedArea: Number
    AboveGradeFinishedAreaUnits: String
    BelowGradeFinishedArea: Number
    BelowGradeFinishedAreaUnits: String
    GarageSpaces: Number
    Basement: String //JSON in Prisma
    BasementYN: Boolean
    BathroomsFull: Number
    BathroomsHalf: Number
    BedroomsTotal: Number
    Cooling: String //JSON in Prisma
    CoolingYN: Boolean
    FireplaceYN: Boolean
    GarageYN: Boolean
    HMS_BathroomsTotalDecimal: String
    HMS_ExclusionsYN: String
    HMS_FloorPlanFeatures: String
    Heating: String //JSON in Prisma
    LivingArea: Number
    Ownership: String
    Roof: String //JSON in Prisma
    LotSizeArea: Number
    LotSizeSquareFeet: Number
    ParkingFeatures: String //JSON in Prisma
    LotSizeUnits: String
    HMS_AgeDescription: String
    AssociationFee: Number
    HMS_LegalDescription: String
    SubAgencyCompensationType: String
    HMS_MaintenanceProvidedYN: String //array, grab index 0
    HighSchoolDistrict: String
    Sewer: String //array, grab index 0
    SubdivisionName: String
    WaterSource: String //this comes in as an array, grab index 0
    Directions: String  // JSON in Prisma
    StreetNumber: String
    HMS_InFloodPlain: String
    HMS_TaxTotalAmount: String
    PropertySubType: String
    odataid: String
    BuyerAgencyCompensation: String
    BuyerAgencyCompensationType: String
    City: String
    CountyOrParish: String
    InternetAddressDisplayYN: Boolean
    InternetEntireListingDisplayYN: Boolean
    ListAgentDirectPhone: String
    ListAgentFullName: String
    ListAgentKey: String
    ListAgentMlsId: String
    ListOfficeKey: String
    ListOfficeMlsId: String
    ListOfficeName: String
    ListOfficePhone: String
    ListPrice: Number
    ListingAgreement: String
    ListingContractDate: String
    ListingKey: String
    ListingTerms: String //JSON in Prisma
    MLSAreaMajor: String
    MlgCanUse: String //JSON in Prisma
    MlgCanView: Boolean
    MlsStatus: String
    ModificationTimestamp: String
    OriginatingSystemName: String
    ParcelNumber: String
    PhotosChangeTimestamp: String
    PhotosCount: Number
    PostalCode: String
    PropertyType: String
    PublicRemarks: String  //JSON in Prisma
    StandardStatus: String
    StateOrProvince: String
    StreetName: String
    StreetSuffix: String
    SubAgencyCompensation: String

}
