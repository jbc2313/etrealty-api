import prisma from "./prismaClient"


import { DProperty } from "@prisma/client";

import { Property } from '../utils/property-type';

// i have updated this for MLSGrid data, needs to be double checked

export const createProperty = async (p: Property) => {

//create the property
    prisma.property.create({
        data: {
            ListingId: p.ListingId,
            Utilities: p.Utilities,  // Posibbly Null Array
            HMS_SaleOptions: p.HMS_SaleOptions,
            PossibleUse: p.PossibleUse, // Posibbly Null Array
            GreenEnergyEfficient: p.GreenEnergyEfficient, //Possibly Null Array
            LotSizeDimensions: p.LotSizeDimensions,
            Zoning: p.Zoning,
            RoadSurfaceType: p.RoadSurfaceType, //Possibly Null Array
            VirtualTourURLUnbranded: p.VirtualTourURLUnbranded, //Possibly Null Array
            WindowFeatures: p.WindowFeatures, //Possibly Null Array
            HMS_Telecom: p.HMS_Telecom,
            SecurityFeatures: p.SecurityFeatures, //Possibly Null Array
            AssociationFeeIncludes: p.AssociationFeeIncludes, //Possibly Null Array
            HMS_InsideCityLimits: p.HMS_InsideCityLimits,
            OwnershipType: p.OwnershipType,
            Appliances: p.Appliances, //Possibly Null Array
            RoadResponsibility: p.RoadResponsibility, //Possibly Null Array
            BuilderModel: p.BuilderModel,
            AssociationAmenities: p.AssociationAmenities, //Possibly Null Array
            CoListAgentFullName: p.CoListAgentFullName,
            CoListAgentMlsId: p.CoListAgentMlsId,
            CoListOfficeName: p.CoListOfficeName,
            CoListOfficePhone: p.CoListOfficePhone,
            YearBuilt: p.YearBuilt,
            Flooring: p.Flooring, //Possibly Null Array
            Possession: p.Possession, //Possibly Null Array
            AssociationFeeFrequency: p.AssociationFeeFrequency,
            HMS_WarrantyDescription: p.HMS_WarrantyDescription,
            InteriorFeatures: p.InteriorFeatures, //Possibly Null Array
            PatioAndPorchFeatures: p.PatioAndPorchFeatures, //Possibly Null Array
            RoomsTotal: p.RoomsTotal,
            HighSchool: p.HighSchool,
            MiddleOrJuniorSchool: p.MiddleOrJuniorSchool,
            ArchitecturalStyle: p.ArchitecturalStyle, //Possibly Null Array
            BuilderName: p.BuilderName,
            ElementarySchool: p.ElementarySchool,
            FireplaceFeatures: p.FireplaceFeatures, //Possibly Null Array
            LaundryFeatures: p.LaundryFeatures, //Possibly Null Array
            LotFeatures: p.LotFeatures, //Possibly Null Array
            PropertyCondition: p.PropertyCondition, //Possibly Null Array
            FireplacesTotal: p.FireplacesTotal,
            AboveGradeFinishedArea: p.AboveGradeFinishedArea,
            AboveGradeFinishedAreaUnits: p.AboveGradeFinishedAreaUnits,
            BelowGradeFinishedArea: p.BelowGradeFinishedArea,
            BelowGradeFinishedAreaUnits: p.BelowGradeFinishedAreaUnits,
            GarageSpaces: p.GarageSpaces,
            Basement: p.Basement, //Possibly Null Array
            BasementYN: p.BasementYN,
            BathroomsFull: p.BathroomsFull,
            BathroomsHalf: p.BathroomsHalf,
            BedroomsTotal: p.BedroomsTotal,
            Cooling: p.Cooling, //Possibly Null Array
            CoolingYN: p.CoolingYN,
            FireplaceYN: p.FireplaceYN,
            GarageYN: p.GarageYN,
            HMS_BathroomsTotalDecimal: p.HMS_BathroomsTotalDecimal,
            HMS_ExclusionsYN: p.HMS_ExclusionsYN,
            HMS_FloorPlanFeatures: p.HMS_FloorPlanFeatures,
            Heating: p.Heating, //Possibly Null Array
            LivingArea: p.LivingArea,
            Ownership: p.Ownership,
            Roof: p.Roof, //Possibly Null Array
            LotSizeArea: p.LotSizeArea,
            LotSizeSquareFeet: p.LotSizeSquareFeet,
            ParkingFeatures: p.ParkingFeatures, // will potentially be null.. have to work this out
            LotSizeUnits: p.LotSizeUnits,
            HMS_AgeDescription: p.HMS_AgeDescription,
            AssociationFee: p.AssociationFee,
            HMS_LegalDescription: p.HMS_LegalDescription,
            SubAgencyCompensationType: p.SubAgencyCompensationType,
            HMS_MaintenanceProvidedYN: p.HMS_MaintenanceProvidedYN[0], //array, grab index 0
            HighSchoolDistrict: p.HighSchoolDistrict,
            Sewer: p.Sewer[0], //array, grab index 0
            SubdivisionName: p.SubdivisionName,
            WaterSource: p.WaterSource[0], //this comes in as an array, grab index 0
            Directions: p.Directions,
            StreetNumber: p.StreetNumber,
            HMS_InFloodPlain: p.HMS_InFloodPlain,
            HMS_TaxTotalAmount: p.HMS_TaxTotalAmount,
            PropertySubType: p.PropertySubType,
            odataid: p.odataid,
            BuyerAgencyCompensation: p.BuyerAgencyCompensation,
            BuyerAgencyCompensationType: p.BuyerAgencyCompensationType,
            City: p.City,
            CountyOrParish: p.CountryOrParish,
            InternetAddressDisplayYN: p.InternetAddressDisplayYN,
            InternetEntireListingDisplayYN: p.InternetEntireListingDisplayYN,
            ListAgentDirectPhone: p.ListAgentDirectPhone,
            ListAgentFullName: p.ListAgentFullName,
            ListAgentKey: p.ListAgentKey,
            ListAgentMlsId: p.ListAgentMlsId,
            ListOfficeKey: p.ListOfficeKey,
            ListOfficeMlsId: p.ListOfficeMlsId,
            ListOfficeName: p.ListOfficeName,
            ListOfficePhone: p.ListOfficePhone,
            ListPrice: p.ListPrice,
            ListingAgreement: p.ListingAgreement,
            ListingContractDate: p.ListingContractDate,
            ListingKey: p.ListingKey,
            ListingTerms: p.ListingTerms,
            MLSAreaMajor: p.MLSAreaMajor,
            MlgCanUse: p.MlgCanUse,
            MlgCanView: p.MlgCanView,
            MlsStatus: p.MlsStatus,
            ModificationTimestamp: p.ModificationTimestamp,
            OriginatingSystemName: p.OriginatingSystemName,
            ParcelNumber: p.ParcelNumber,
            PhotosChangeTimestamp: p.PhotosChangeTimestamp,
            PhotosCount: p.PhotosCount,
            PostalCode: p.PostalCode,
            PropertyType: p.PropertyType,
            PublicRemarks: p.PublicRemarks,
            StandardStatus: p.StandardStatus,
            StateOrProvince: p.StateOrProvince,
            StreetName: p.StreetName,
            StreetSuffix: p.StreetSuffix,
            SubAgencyCompensation: p.SubAgencyCompensation,
        }
    })
        .then((res: any) => {
        console.log("Property was created in Db.")
    })

}
