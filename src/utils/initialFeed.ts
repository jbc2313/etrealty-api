
import { runImageConvert } from './runImageConvert';
import { prepApiData } from './prepareData';
import { Property } from './property-type';
import { runS3upload } from './runS3upload';
import { createProperty } from '../dbUtils/createSingleProperty';



// used after first fetch
import { coerceProperty } from './coercePropertyType';

export async function initialFeed() {

    let propertyInfo = await prepApiData();
    let prePrepPropertyArray: Property[] = await runImageConvert(propertyInfo.propertyArray);
    let preppedPropertyArray: Property[] = await runS3upload(prePrepPropertyArray);
    // clean up imgfolder here so file sys doesnt get out of hand
    // prepedPropertyArray needs to be uploaded to db, then loop reran again and again 
    
    //print to console the next URL to get the next set of propertys
    console.log("NEXT PROPERTY SET LINK");
    console.log(propertyInfo.nextLink); 
    preppedPropertyArray.forEach((prop: Property)=>{
        createProperty(prop)
    })






    return propertyInfo;



};
