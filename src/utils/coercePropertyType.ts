import { Property } from './property-type';

export async function coerceProperty(data: any) {
    let propertyArray: any = [];
    


    let apiData = data.data.value;
    // use to check data fro mlsgrid
    //console.log(apiData);
 
    let size = apiData.length;
    //console.log(`Size of apiData = ${size}`);
    // current size is 10.

    let temp: Partial<Property> = {};
    
    






    for(let z = 0; z < size; z++) {
        temp.ListingId = apiData[z].ListingId; 

        if(apiData[z].Utilities){
            temp.Utilities = JSON.stringify(apiData[z].Utilities);
        } else {
            temp.Utilities = "no info";
        }

        if(apiData[z].HMS_SaleOptions){
            temp.HMS_SaleOptions = apiData[z].HMS_SaleOptions;
        } else {
            temp.HMS_SaleOptions = "no info";
        }

        if(apiData[z].PossibleUse){
            temp.PossibleUse = JSON.stringify(apiData[z].PossibleUse);
        } else {
            temp.PossibleUse = "no info";
        }
        
        if(apiData[z].GreenEnergyEfficient){
            temp.GreenEnergyEfficient= JSON.stringify(apiData[z].GreenEnergyEfficient);
        } else {
            temp.GreenEnergyEfficient = "no info";
        }

        if(apiData[z].LotSizeDimensions){
            temp.LotSizeDimensions = apiData[z].LotSizeDimensions;
        } else {
            temp.LotSizeDimensions = "no info";
        }

        if(apiData[z].Zoning){
            temp.Zoning = apiData[z].Zoning;
        } else {
            temp.Zoning = "no info";
        }

        if(apiData[z].RoadSurfaceType){
            temp.RoadSurfaceType = JSON.stringify(apiData[z].RoadSurfaceType);
        } else {
            temp.RoadSurfaceType = "no info";
        }

        if(apiData[z].VirtualTourURLUnbranded){
            temp.VirtualTourURLUnbranded = JSON.stringify(apiData[z].VirtualTourURLUnbranded);
        } else {
            temp.VirtualTourURLUnbranded = "no info";
        }

        if(apiData[z].WindowFeatures){
            temp.WindowFeatures = JSON.stringify(apiData[z].WindowFeatures);
        } else {
            temp.WindowFeatures = "no info";
        }

        if(apiData[z].HMS_Telecom){
            temp.HMS_Telecom = apiData[z].HMS_Telecom;
        } else {
            temp.HMS_Telecom = "no info";
        }

        if(apiData[z].SecurityFeatures){
            temp.SecurityFeatures = JSON.stringify(apiData[z].SecurityFeatures);
        } else {
            temp.SecurityFeatures = "no info";
        }

        if(apiData[z].AssociationFeeIncludes){
            temp.AssociationFeeIncludes = JSON.stringify(apiData[z].AssociationFeeIncludes);
        } else {
            temp.AssociationFeeIncludes = "no info";
        }
        
        if(apiData[z].HMS_InsideCityLimits){
            temp.HMS_InsideCityLimits = apiData[z].HMS_InsideCityLimits;
        } else {
            temp.HMS_InsideCityLimits = "no info";
        }

        if(apiData[z].OwnershipType){
            temp.OwnershipType = apiData[z].OwnershipType;
        } else {
            temp.OwnershipType = "no info";
        }


        if(apiData[z].Appliances){
            temp.Appliances = JSON.stringify(apiData[z].Appliances);
        } else {
            temp.Appliances = "no info";
        }

        if(apiData[z].RoadResponsibility){
            temp.RoadResponsibility = JSON.stringify(apiData[z].RoadResponsibility);
        } else {
            temp.RoadResponsibility = "no info";
        }

        if(apiData[z].BuilderModel){
            temp.BuilderModel = apiData[z].BuilderModel;
        } else {
            temp.BuilderModel = "no info";
        }

        if(apiData[z].AssociationAmenities){
            temp.AssociationAmenities = JSON.stringify(apiData[z].AssociationAmenities);
        } else {
            temp.AssociationAmenities = "no info";
        }

        if(apiData[z].CoListAgentFullName){
            temp.CoListAgentFullName = apiData[z].CoListAgentFullName;
        } else {
            temp.CoListAgentFullName = "no info";
        }

        if(apiData[z].CoListAgentMlsId){
            temp.CoListAgentMlsId = apiData[z].CoListAgentMlsId;
        } else {
            temp.CoListAgentMlsId = "no info";
        }

        if(apiData[z].CoListOfficeName){
            temp.CoListOfficeName = apiData[z].CoListOfficeName;
        } else {
            temp.CoListOfficeName = "no info";
        }

        if(apiData[z].CoListOfficePhone){
            temp.CoListOfficePhone= apiData[z].CoListOfficePhone;
        } else {
            temp.CoListOfficePhone = "no info";
        }

        if(apiData[z].YearBuilt){
            temp.YearBuilt = apiData[z].YearBuilt;
        } else {
            temp.YearBuilt = 0;
        }

        if(apiData[z].Flooring){
            temp.Flooring = JSON.stringify(apiData[z].Flooring);
        } else {
            temp.Flooring = "no info";
        }

        if(apiData[z].Possession){
            temp.Possession = JSON.stringify(apiData[z].Possession);
        } else {
            temp.Possession = "no info";
        }
        
        if(apiData[z].AssociationFeeFrequency){
            temp.AssociationFeeFrequency = apiData[z].AssociationFeeFrequency;
        } else {
            temp.AssociationFeeFrequency = "no info";
        }

        if(apiData[z].HMS_WarrantyDescription){
            temp.HMS_WarrantyDescription = apiData[z].HMS_WarrantyDescription;
        } else {
            temp.HMS_WarrantyDescription = "no info";
        }

        if(apiData[z].InteriorFeatures){
            temp.InteriorFeatures = JSON.stringify(apiData[z].InteriorFeatures);
        } else {
            temp.InteriorFeatures = "no info";
        }

        if(apiData[z].PatioAndPorchFeatures){
            temp.PatioAndPorchFeatures = JSON.stringify(apiData[z].PatioAndPorchFeatures);
        } else {
            temp.PatioAndPorchFeatures = "no info";
        }

        if(apiData[z].RoomsTotal){
            temp.RoomsTotal = apiData[z].RoomsTotal;
        } else {
            temp.RoomsTotal = 0;
        }

        if(apiData[z].HighSchool){
            temp.HighSchool = apiData[z].HighSchool;
        } else {
            temp.HighSchool = "no info";
        }

        if(apiData[z].MiddleOrJuniorSchool){
            temp.MiddleOrJuniorSchool = apiData[z].MiddleOrJuniorSchool;
        } else {
            temp.MiddleOrJuniorSchool = "no info";
        }

        if(apiData[z].ArchitecturalStyle){
            temp.ArchitecturalStyle = JSON.stringify(apiData[z].ArchitecturalStyle);
        } else {
            temp.ArchitecturalStyle = "no info";
        }

        if(apiData[z].BuilderName){
            temp.BuilderName = apiData[z].BuilderName;
        } else {
            temp.BuilderName = "no info";
        }

        if(apiData[z].ElementarySchool){
            temp.ElementarySchool = apiData[z].ElementarySchool;
        } else {
            temp.ElementarySchool = "no info";
        }

        if(apiData[z].FireplaceFeatures){
            temp.FireplaceFeatures = JSON.stringify(apiData[z].FireplaceFeatures);
        } else {
            temp.FireplaceFeatures = "no info";
        }

        if(apiData[z].LaundryFeatures){
            temp.LaundryFeatures = JSON.stringify(apiData[z].LaundryFeatures);
        } else {
            temp.LaundryFeatures = "no info";
        }

        if(apiData[z].LotFeatures){
            temp.LotFeatures = JSON.stringify(apiData[z].LotFeatures);
        } else {
            temp.LotFeatures = "no info";
        }

        if(apiData[z].PropertyCondition){
            temp.PropertyCondition = JSON.stringify(apiData[z].PropertyCondition);
        } else {
            temp.PropertyCondition = "no info";
        }

        if(apiData[z].FireplacesTotal){
            temp.FireplacesTotal = apiData[z].FireplacesTotal;
        } else {
            temp.FireplacesTotal = 0;
        }

        if(apiData[z].AboveGradeFinishedArea){
            temp.AboveGradeFinishedArea = apiData[z].AboveGradeFinishedArea;
        } else {
            temp.AboveGradeFinishedArea = 0;
        }

        if(apiData[z].AboveGradeFinishedAreaUnits){
            temp.AboveGradeFinishedAreaUnits = apiData[z].AboveGradeFinishedAreaUnits;
        } else {
            temp.AboveGradeFinishedAreaUnits = "no info";
        }

        if(apiData[z].BelowGradeFinishedArea){
            temp.BelowGradeFinishedArea = apiData[z].BelowGradeFinishedArea;
        } else {
            temp.BelowGradeFinishedArea = 0;
        }

        if(apiData[z].BelowGradeFinishedAreaUnits){
            temp.BelowGradeFinishedAreaUnits = apiData[z].BelowGradeFinishedAreaUnits;
        } else {
            temp.BelowGradeFinishedAreaUnits = "no info";
        }

        if(apiData[z].GarageSpaces){
            temp.GarageSpaces = apiData[z].GarageSpaces;
        } else {
            temp.GarageSpaces = 0;
        }
        
        if(apiData[z].Basement){
            temp.Basement = JSON.stringify(apiData[z].Basement);
        } else {
            temp.Basement = "no info";
        }

        if(apiData[z].BasementYN){
            temp.BasementYN = apiData[z].BasementYN;
        } else {
            temp.BasementYN = false;
        }

        if(apiData[z].BathroomsFull){
            temp.BathroomsFull = apiData[z].BathroomsFull;
        } else {
            temp.BathroomsFull = 0;
        }

        if(apiData[z].BathroomsHalf){
            temp.BathroomsHalf = apiData[z].BathroomsHalf;
        } else {
            temp.BathroomsHalf = 0;
        }

        if(apiData[z].BedroomsTotal){
            temp.BedroomsTotal = apiData[z].BedroomsTotal;
        } else {
            temp.BedroomsTotal = 0;
        }

        if(apiData[z].Cooling){
            temp.Cooling = JSON.stringify(apiData[z].Cooling);
        } else {
            temp.Cooling = "no info";
        }

        if(apiData[z].CoolingYN){
            temp.CoolingYN = apiData[z].CoolingYN;
        } else {
            temp.CoolingYN = false;
        }

        if(apiData[z].FireplaceYN){
            temp.FireplaceYN = apiData[z].FireplaceYN;
        } else {
            temp.FireplaceYN = false;
        }

        if(apiData[z].GarageYN){
            temp.GarageYN = apiData[z].GarageYN;
        } else {
            temp.GarageYN = false;
        }

        if(apiData[z].HMS_BathroomsTotalDecimal){
            temp.HMS_BathroomsTotalDecimal = apiData[z].HMS_BathroomsTotalDecimal;
        } else {
            temp.HMS_BathroomsTotalDecimal = "no info";
        }

        if(apiData[z].HMS_ExclusionsYN){
            temp.HMS_ExclusionsYN = apiData[z].HMS_ExclusionsYN;
        } else {
            temp.HMS_ExclusionsYN = "no info";
        }

        if(apiData[z].HMS_FloorPlanFeatures){
            temp.HMS_FloorPlanFeatures = apiData[z].HMS_FloorPlanFeatures;
        } else {
            temp.HMS_FloorPlanFeatures = "no info";
        }

        if(apiData[z].Heating){
            temp.Heating = JSON.stringify(apiData[z].Heating);
        } else {
            temp.Heating = "no info";
        }

        if(apiData[z].LivingArea){
            temp.LivingArea = apiData[z].LivingArea;
        } else {
            temp.LivingArea = 0;
        }

        if(apiData[z].Ownership){
            temp.Ownership = apiData[z].Ownership;
        } else {
            temp.Ownership = "no info";
        }

        if(apiData[z].Roof){
            temp.Roof = JSON.stringify(apiData[z].Roof);
        } else {
            temp.Roof = "no info";
        }

        if(apiData[z].LotSizeArea){
            temp.LotSizeArea= apiData[z].LotSizeArea;
        } else {
            temp.LotSizeArea = 0;
        }

        if(apiData[z].LotSizeSquareFeet){
            temp.LotSizeSquareFeet = apiData[z].LotSizeSquareFeet;
        } else {
            temp.LotSizeSquareFeet = 0;
        }
        
        if(apiData[z].ParkingFeatures){
            temp.ParkingFeatures = JSON.stringify(apiData[z].ParkingFeatures);
        } else {
            temp.ParkingFeatures = "no info";
        }

        if(apiData[z].LotSizeUnits){
            temp.LotSizeUnits = apiData[z].LotSizeUnits;
        } else {
            temp.LotSizeUnits = "no info";
        }

        if(apiData[z].HMS_AgeDescription){
            temp.HMS_AgeDescription = apiData[z].HMS_AgeDescription;
        } else {
            temp.HMS_AgeDescription = "no info";
        }

        if(apiData[z].AssociationFee){
            temp.AssociationFee = apiData[z].AssociationFee;
        } else {
            temp.AssociationFee = 0;
        }

        if(apiData[z].HMS_LegalDescription){
            temp.HMS_LegalDescription = apiData[z].HMS_LegalDescription;
        } else {
            temp.HMS_LegalDescription = "no info";
        }

        if(apiData[z].SubAgencyCompensationType){
            temp.SubAgencyCompensationType = apiData[z].SubAgencyCompensationType;
        } else {
            temp.SubAgencyCompensationType = "no info";
        }

        if(apiData[z].HMS_MaintenanceProvidedYN){
            temp.HMS_MaintenanceProvidedYN = apiData[z].HMS_MaintenanceProvidedYN[0];
        } else {
            temp.HMS_MaintenanceProvidedYN = "no info";
        }

        if(apiData[z].HighSchoolDistrict){
            temp.HighSchoolDistrict = apiData[z].HighSchoolDistrict;
        } else {
            temp.HighSchoolDistrict = "no info";
        }

        if(apiData[z].Sewer){
            temp.Sewer = apiData[z].Sewer[0];
        } else {
            temp.Sewer = "no info";
        }

        if(apiData[z].SubdivisionName){
            temp.SubdivisionName = apiData[z].SubdivisionName;
        } else {
            temp.SubdivisionName = "no info";
        }

        if(apiData[z].WaterSource){
            temp.WaterSource = apiData[z].WaterSource[0];
        } else {
            temp.WaterSource = "no info";
        }

        if(apiData[z].Directions){
            temp.Directions = apiData[z].Directions;
        } else {
            temp.Directions = "no info";
        }

        if(apiData[z].StreetNumber){
            temp.StreetNumber = apiData[z].StreetNumber;
        } else {
            temp.StreetNumber = "no info";
        }

        if(apiData[z].HMS_InFloodPlain){
            temp.HMS_InFloodPlain = apiData[z].HMS_InFloodPlain;
        } else {
            temp.HMS_InFloodPlain = "no info";
        }

        if(apiData[z].HMS_TaxTotalAmount){
            temp.HMS_TaxTotalAmount = apiData[z].HMS_TaxTotalAmount;
        } else {
            temp.HMS_TaxTotalAmount = "no info";
        }

        if(apiData[z].PropertySubType){
            temp.PropertySubType = apiData[z].PropertySubType;
        } else {
            temp.PropertySubType = "no info";
        }

        if(apiData[z].odataid){
            temp.odataid = apiData[z].odataid;
        } else {
            temp.odataid = "no info";
        }

        if(apiData[z].BuyerAgencyCompensation){
            temp.BuyerAgencyCompensation = apiData[z].BuyerAgencyCompensation;
        } else {
            temp.BuyerAgencyCompensation = "no info";
        }

        if(apiData[z].BuyerAgencyCompensationType){
            temp.BuyerAgencyCompensationType = apiData[z].BuyerAgencyCompensationType;
        } else {
            temp.BuyerAgencyCompensationType = "no info";
        }
        
        if(apiData[z].City){
            temp.City = apiData[z].City;
        } else {
            temp.City = "no info";
        }

        if(apiData[z].CountyOrParish){
            temp.CountyOrParish = apiData[z].CountyOrParish;
        } else {
            temp.CountyOrParish = "no info";
        }

        if(apiData[z].InternetAddressDisplayYN){
            temp.InternetAddressDisplayYN = apiData[z].InternetAddressDisplayYN;
        } else {
            temp.InternetAddressDisplayYN = false;
        }

        if(apiData[z].InternetEntireListingDisplayYN){
            temp.InternetEntireListingDisplayYN = apiData[z].InternetEntireListingDisplayYN;
        } else {
            temp.InternetEntireListingDisplayYN = false;
        }

        if(apiData[z].ListAgentDirectPhone){
            temp.ListAgentDirectPhone = apiData[z].ListAgentDirectPhone;
        } else {
            temp.ListAgentDirectPhone = "no info";
        }

        if(apiData[z].ListAgentFullName){
            temp.ListAgentFullName = apiData[z].ListAgentFullName;
        } else {
            temp.ListAgentFullName = "no info";
        }

        if(apiData[z].ListAgentKey){
            temp.ListAgentKey = apiData[z].ListAgentKey;
        } else {
            temp.ListAgentKey = "no info";
        }

        if(apiData[z].ListAgentMlsId){
            temp.ListAgentMlsId = apiData[z].ListAgentMlsId;
        } else {
            temp.ListAgentMlsId = "no info";
        }
        
        if(apiData[z].ListOfficeKey){
            temp.ListOfficeKey = apiData[z].ListOfficeKey;
        } else {
            temp.ListOfficeKey = "no info";
        }

        if(apiData[z].ListOfficeMlsId){
            temp.ListOfficeMlsId = apiData[z].ListOfficeMlsId;
        } else {
            temp.ListOfficeMlsId = "no info";
        }

        if(apiData[z].ListOfficeName){
            temp.ListOfficeName = apiData[z].ListOfficeName;
        } else {
            temp.ListOfficeName = "no info";
        }
        
        if(apiData[z].ListOfficePhone){
            temp.ListOfficePhone = apiData[z].ListOfficePhone;
        } else {
            temp.ListOfficePhone = "no info";
        }

        if(apiData[z].ListPrice){
            temp.ListPrice = apiData[z].ListPrice;
        } else {
            temp.ListPrice = 0;
        }

        if(apiData[z].ListingAgreement){
            temp.ListingAgreement = apiData[z].ListingAgreement;
        } else {
            temp.ListingAgreement = "no info";
        }

        if(apiData[z].ListingContractDate){
            temp.ListingContractDate = apiData[z].ListingContractDate;
        } else {
            temp.ListingContractDate = "no info";
        }

        if(apiData[z].ListingKey){
            temp.ListingKey = apiData[z].ListingKey;
        } else {
            temp.ListingKey = "no info";
        }

        if(apiData[z].ListingTerms){
            temp.ListingTerms = JSON.stringify(apiData[z].ListingTerms);
        } else {
            temp.ListingTerms = "no info";
        }

        if(apiData[z].MLSAreaMajor){
            temp.MLSAreaMajor = apiData[z].MLSAreaMajor;
        } else {
            temp.MLSAreaMajor = "no info";
        }

        if(apiData[z].MlgCanUse){
            temp.MlgCanUse = JSON.stringify(apiData[z].MlgCanUse);
        } else {
            temp.MlgCanUse = "no info";
        }

        if(apiData[z].MlgCanView){
            temp.MlgCanView = apiData[z].MlgCanView;
        } else {
            temp.MlgCanView = false;
        }

        if(apiData[z].MlsStatus){
            temp.MlsStatus = apiData[z].MlsStatus;
        } else {
            temp.MlsStatus = "no info";
        }

        if(apiData[z].ModificationTimestamp){
            temp.ModificationTimestamp = apiData[z].ModificationTimestamp;
        } else {
            temp.ModificationTimestamp = "no info";
        }

        if(apiData[z].OriginatingSystemName){
            temp.OriginatingSystemName = apiData[z].OriginatingSystemName;
        } else {
            temp.OriginatingSystemName = "no info";
        }

        if(apiData[z].ParcelNumber){
            temp.ParcelNumber = apiData[z].ParcelNumber;
        } else {
            temp.ParcelNumber = "no info";
        }

        if(apiData[z].PhotosChangeTimestamp){
            temp.PhotosChangeTimestamp = apiData[z].PhotosChangeTimestamp;
        } else {
            temp.PhotosChangeTimestamp = "no info";
        }

        if(apiData[z].PhotosCount){
            temp.PhotosCount = apiData[z].PhotosCount;
        } else {
            temp.PhotosCount = 0;
        }

        if(apiData[z].PostalCode){
            temp.PostalCode = apiData[z].PostalCode;
        } else {
            temp.PostalCode = "no info";
        }

        if(apiData[z].PropertyType){
            temp.PropertyType = apiData[z].PropertyType;
        } else {
            temp.PropertyType = "no info";
        }

        if(apiData[z].PublicRemarks){
            temp.PublicRemarks = apiData[z].PublicRemarks;
        } else {
            temp.PublicRemarks = "no info";
        }

        if(apiData[z].StandardStatus){
            temp.StandardStatus = apiData[z].StandardStatus;
        } else {
            temp.StandardStatus = "no info";
        }

        if(apiData[z].StateOrProvince){
            temp.StateOrProvince = apiData[z].StateOrProvince;
        } else {
            temp.StateOrProvince = "no info";
        }

        if(apiData[z].StreetName){
            temp.StreetName = apiData[z].StreetName;
        } else {
            temp.StreetName = "no info";
        }

        if(apiData[z].StreetSuffix){
            temp.StreetSuffix = apiData[z].StreetSuffix;
        } else {
            temp.StreetSuffix = "no info";
        }

        if(apiData[z].SubAgencyCompensation){
            temp.SubAgencyCompensation = apiData[z].SubAgencyCompensation;
        } else {
            temp.SubAgencyCompensation = "no info";
        }

        // creating actual property object to push in array and then be saved in Prisma

        let property: Property = { 
            ListingId: temp.ListingId as String,
            Utilities: temp.Utilities,
            HMS_SaleOptions: temp.HMS_SaleOptions as String,
            PossibleUse: temp.PossibleUse,
            GreenEnergyEfficient: temp.GreenEnergyEfficient,
            LotSizeDimensions: temp.LotSizeDimensions as String,
            Zoning: temp.Zoning as String,
            RoadSurfaceType: temp.RoadSurfaceType,
            VirtualTourURLUnbranded: temp.VirtualTourURLUnbranded,
            WindowFeatures: temp.WindowFeatures,
            HMS_Telecom: temp.HMS_Telecom as String,
            SecurityFeatures: temp.SecurityFeatures,
            AssociationFeeIncludes: temp.AssociationFeeIncludes,
            HMS_InsideCityLimits: temp.HMS_InsideCityLimits as String,
            OwnershipType: temp.OwnershipType as String,
            Appliances: temp.Appliances,
            RoadResponsibility: temp.RoadResponsibility,
            BuilderModel: temp.BuilderModel as String,
            AssociationAmenities: temp.AssociationAmenities,
            CoListAgentFullName: temp.CoListAgentFullName as String,
            CoListAgentMlsId: temp.CoListAgentMlsId as String,
            CoListOfficeName: temp.CoListOfficeName as String,
            CoListOfficePhone: temp.CoListOfficePhone as String,
            YearBuilt: temp.YearBuilt as Number,
            Flooring: temp.Flooring,
            Possession: temp.Possession,
            AssociationFeeFrequency: temp.AssociationFeeFrequency as String,
            HMS_WarrantyDescription: temp.HMS_WarrantyDescription as String,
            InteriorFeatures: temp.InteriorFeatures,
            PatioAndPorchFeatures: temp.PatioAndPorchFeatures,
            RoomsTotal: temp.RoomsTotal as Number,
            HighSchool: temp.HighSchool as String,
            MiddleOrJuniorSchool: temp.MiddleOrJuniorSchool as String,
            ArchitecturalStyle: temp.ArchitecturalStyle,
            BuilderName: temp.BuilderName as String,
            ElementarySchool: temp.ElementarySchool as String,
            FireplaceFeatures: temp.FireplaceFeatures,
            LaundryFeatures: temp.LaundryFeatures,
            LotFeatures: temp.LotFeatures,
            PropertyCondition: temp.PropertyCondition,
            FireplacesTotal: temp.FireplacesTotal as Number,
            AboveGradeFinishedArea: temp.AboveGradeFinishedArea as Number,
            AboveGradeFinishedAreaUnits: temp.AboveGradeFinishedAreaUnits as String,
            BelowGradeFinishedArea: temp.BelowGradeFinishedArea as Number,
            BelowGradeFinishedAreaUnits: temp.BelowGradeFinishedAreaUnits as String,
            GarageSpaces: temp.GarageSpaces as Number,
            Basement: temp.Basement,
            BasementYN: temp.BasementYN as Boolean,
            BathroomsFull: temp.BathroomsFull as Number,
            BathroomsHalf: temp.BathroomsHalf as Number,
            BedroomsTotal: temp.BedroomsTotal as Number,
            Cooling: temp.Cooling,
            CoolingYN: temp.CoolingYN as Boolean,
            FireplaceYN: temp.FireplaceYN as Boolean,
            GarageYN: temp.GarageYN as Boolean,
            HMS_BathroomsTotalDecimal: temp.HMS_BathroomsTotalDecimal as String,
            HMS_ExclusionsYN: temp.HMS_ExclusionsYN as String,
            HMS_FloorPlanFeatures: temp.HMS_FloorPlanFeatures as String,
            Heating: temp.Heating,
            LivingArea: temp.LivingArea as Number,
            Ownership: temp.Ownership as String,
            Roof: temp.Roof,
            LotSizeArea: temp.LotSizeArea as Number,
            LotSizeSquareFeet: temp.LotSizeSquareFeet as Number,
            ParkingFeatures: temp.ParkingFeatures,
            LotSizeUnits: temp.LotSizeUnits as String,
            HMS_AgeDescription: temp.HMS_AgeDescription as String,
            AssociationFee: temp.AssociationFee as Number,
            HMS_LegalDescription: temp.HMS_LegalDescription as String,
            SubAgencyCompensationType: temp.SubAgencyCompensation as String,
            HMS_MaintenanceProvidedYN: temp.HMS_MaintenanceProvidedYN as String,
            HighSchoolDistrict: temp.HighSchoolDistrict as String,
            Sewer: temp.Sewer as String,
            SubdivisionName: temp.SubdivisionName as String,
            WaterSource: temp.WaterSource as String,
            Directions: temp.Directions as String,
            StreetNumber: temp.StreetNumber as String,
            HMS_InFloodPlain: temp.HMS_InFloodPlain as String,
            HMS_TaxTotalAmount: temp.HMS_TaxTotalAmount as String,
            PropertySubType: temp.PropertySubType as String,
            odataid: temp.odataid as String,
            BuyerAgencyCompensation: temp.BuyerAgencyCompensation as String,
            BuyerAgencyCompensationType: temp.BuyerAgencyCompensationType as String,
            City: temp.City as String,
            CountyOrParish: temp.CountyOrParish as String,
            InternetAddressDisplayYN: temp.InternetAddressDisplayYN as Boolean,
            InternetEntireListingDisplayYN: temp.InternetEntireListingDisplayYN as Boolean,
            ListAgentDirectPhone: temp.ListAgentDirectPhone as String,
            ListAgentFullName: temp.ListAgentFullName as String,
            ListAgentMlsId: temp.ListAgentMlsId as String,
            ListAgentKey: temp.ListAgentKey as String,
            ListOfficeMlsId: temp.ListOfficeMlsId as String,
            ListOfficeName: temp.ListOfficeName as String,
            ListOfficePhone: temp.ListOfficePhone as String,
            ListOfficeKey: temp.ListOfficeKey as String,
            ListPrice: temp.ListPrice as Number,
            ListingAgreement: temp.ListingAgreement as String,
            ListingContractDate: temp.ListingContractDate as String,
            ListingKey: temp.ListingKey as String,
            ListingTerms: temp.ListingTerms,
            MLSAreaMajor: temp.MLSAreaMajor as String,
            MlgCanUse: temp.MlgCanUse,
            MlgCanView: temp.MlgCanView as Boolean,
            MlsStatus: temp.MlsStatus as String,
            ModificationTimestamp: temp.ModificationTimestamp as String,
            OriginatingSystemName: temp.OriginatingSystemName as String,
            ParcelNumber: temp.ParcelNumber as String,
            PhotosChangeTimestamp: temp.PhotosChangeTimestamp as String,
            PhotosCount: temp.PhotosCount as Number,
            PostalCode: temp.PostalCode as String,
            PropertyType: temp.PropertyType as String,
            PublicRemarks: temp.PublicRemarks as String,
            StandardStatus: temp.StandardStatus as String,
            StateOrProvince: temp.StateOrProvince as String,
            StreetName: temp.StreetName as String,
            StreetSuffix: temp.StreetSuffix as String ,
            SubAgencyCompensation: temp.SubAgencyCompensation as String
 
        }

        propertyArray.push(property)
    }


    return propertyArray;

}




/*
    *
    *
    *
    '@odata.id': "https://api-demo.mlsgrid.com/v2/Property('HMS1085709')",
    ListingKey: 'HMS1085709',
    AboveGradeFinishedArea: 3848,
    AboveGradeFinishedAreaUnits: 'Square Feet',
    BathroomsFull: 5,
    BathroomsHalf: 1,
    BedroomsTotal: 5,
    BelowGradeFinishedArea: 1600,
    BelowGradeFinishedAreaUnits: 'Square Feet',
    BuyerAgencyCompensation: '3',
    BuyerAgencyCompensationType: '%',
    City: 'Overland Park',
    CoListAgentFullName: 'Mike Perry',
    CoListAgentKey: 'HMS1045305',
    CoListAgentMlsId: 'HMSPERRYMI',
    CoListOfficeKey: 'HMS1007804',
    CoListOfficeMlsId: 'HMSGWA01',
    CoListOfficeName: 'Weichert, Realtors Welch & Com',
    CoListOfficePhone: '913-647-5700',
    Cooling: [ 'Electric' ],
    CountyOrParish: 'Johnson, KS',
    Directions: 'Starting at 159th and Quivira Rd in Overland Park. Travel South on Quivira to 168th St then turn right into Century Farms. ',
    Heating: [ 'Forced Air' ],
    InternetAddressDisplayYN: true,
    InternetEntireListingDisplayYN: true,
    ListAgentDirectPhone: '913-433-4651',
    ListAgentFullName: 'Rachelle Moley',
    ListAgentKey: 'HMS1052953',
    ListAgentMlsId: 'HMSRACHELLEM',
    ListingAgreement: 'Exclusive Right To Sell',
    ListingContractDate: '2020-01-13',
    ListingId: 'HMS2203586',
    ListOfficeKey: 'HMS1007804',
    ListOfficeMlsId: 'HMSGWA01',
    ListOfficeName: 'Weichert, Realtors Welch & Com',
    ListOfficePhone: '913-647-5700',
    ListPrice: 813000,
    LivingArea: 5448,
    MlsStatus: 'Pending',
    OriginatingSystemName: 'hmls',
    ParcelNumber: 'NP09080000-0059',
    PostalCode: '66221',
    PropertySubType: 'Single Family Residence',
    PropertyType: 'Residential',
    PublicRemarks: 'This custom plan is a spacious 1 1/2 story by Braklow Custom Homes.  Soaring great room with main floor master suite, formal dinning room and second main floor bedroom.  Spacious kitchen with quartz countertops, wood floors and large pantry. Unique upper level loft plus three bedrooms each with their own private baths.  Full finished lower level with suspended garage bonus space. Stunning exterior built on a level lot with large porch and covered back patio. Home is under construction - Please visit model office. Century Farms is a brand new OP community featuring a mix of modern with a hint of family farming values to honor the heritage of the 100 year old farmland. Spectacular amenity package with resort style pool, clubhouse w/ fitness center, community garden & large outdoor field ideal for soccer. ',
    StandardStatus: 'Pending',
    StateOrProvince: 'KS',
    StreetName: 'Century',
    StreetNumber: '16720',
    StreetSuffix: 'Street',
    HMS_AgeDescription: '2 Years/Less',
    ArchitecturalStyle: [ 'Traditional' ],
    AssociationAmenities: [ 'Clubhouse', 'Exercise Room', 'Play Area', 'Pool', 'Trail(s)' ],
    AssociationFee: 1200,
    AssociationFeeFrequency: 'Annually',
    AssociationFeeIncludes: [ 'Curbside Recycle', 'Trash' ],
    Basement: [ 'Finished' ],
    BasementYN: true,
    HMS_BathroomsTotalDecimal: '5.10',
    BuilderName: 'Braklow',
    ConstructionMaterials: [ 'Stone Trim', 'Stucco' ],
    CoolingYN: true,
    HMS_DiningAreaFeatures: 'Breakfast Area,Eat-In Kitchen,Formal',
    ElementarySchool: 'Wolf Springs',
    HMS_EstimatedCompletionDays: '150 Or More Days',
    HMS_ExclusionsYN: '0',
    FireplaceFeatures: [ 'Great Room' ],
    FireplacesTotal: 1,
    FireplaceYN: true,
    Flooring: [ 'Wood' ],
    HMS_FloorPlanFeatures: '1.5 Stories',
    GarageSpaces: 3,
    GarageYN: true,
    HighSchool: 'Blue Valley Southwest',
    HMS_InFloodPlain: 'No',
    HMS_InsideCityLimits: 'Yes',
    HMS_InstallationRFactorCeiling: '49',
    HMS_InstallationRFactorWall: '13',
    InteriorFeatures: [ 'Custom Cabinets', 'Kitchen Island', 'Walk-In Closet(s)' ],
    LaundryFeatures: [ 'Main Level', 'Upper Level' ],
    HMS_LegalDescription: 'Lot 59, CENTURY FARMS SECOND PLAT',
    ListingTerms: [ 'Cash', 'Conventional', 'FHA', 'VA Loan' ],
    LotFeatures: [ 'City Lot', 'Level', 'Sprinkler-In Ground' ],
    HMS_MaintenanceProvidedYN: '0',
    MiddleOrJuniorSchool: 'Aubry Bend',
    MLSAreaMajor: '345 - N=135th;S=Co Ln;E=State Ln;W=Pflumm',
    HMS_OtherRoomFeatures: 'Main Floor BR,Main Floor Master',
    Ownership: 'Private',
    OwnershipType: 'Private',
    ParkingFeatures: [ 'Attached', 'Garage Faces Front' ],
    PatioAndPorchFeatures: [ 'Covered Patio', 'Porch' ],
    Possession: [ 'Close Of Escrow' ],
    PropertyCondition: [ 'Under Construction' ],
    RoadResponsibility: [ 'Public Maintenance' ],
    Roof: [ 'Composition' ],
    HighSchoolDistrict: 'Blue Valley',
    Sewer: [ 'City/Public' ],
    SubAgencyCompensation: '0',
    SubdivisionName: 'CENTURY FARMS',
    HMS_TaxTotalAmount: '126',
    HMS_Telecom: 'Cable - Available',
    VirtualTourURLUnbranded: 'www.centuryfarmsop.com',
    WaterSource: [ 'Public' ],
    LotSizeArea: 0.35,
    LotSizeUnits: 'Acres',
    SubAgencyCompensationType: '%',
    LotSizeSquareFeet: 15246,
    RoomsTotal: 11,
    ModificationTimestamp: '2021-12-09T00:17:05.170Z',
    PhotosCount: 1,
    PhotosChangeTimestamp: '2021-01-25T20:43:14.276Z',
    MlgCanView: true,
    MlgCanUse: [ 'IDX' ]









    *
    *
    *
    */
