

import { runImageConvert } from './runImageConvert';
import { prepApiData } from './prepareData';
import { Property } from './property-type';
import { runS3upload } from './runS3upload';
import { createProperty } from '../dbUtils/createSingleProperty';
import { removeImageDir } from './cleanImgFolder';

import { coerceProperty } from './coercePropertyType';
import { getNextPropertys } from './contFetchProp';

export async function contFeed() {

    // add next url here
    let preInfo = await getNextPropertys("https://api.mlsgrid.com/v2/Property?$expand=Media&$filter=OriginatingSystemName%20eq%20'hmls'%20and%20MlgCanView%20eq%20true&$top=20&$skip=40");
    let pInfo = await coerceProperty(preInfo);


// main loop
    async function feed(propertyInfo: any) {
        let prePrepPropertyArray: Property[] = await runImageConvert(propertyInfo.propertyArray);
        let preppedPropertyArray: Property[] = await runS3upload(prePrepPropertyArray);
        // clean up imgfolder here so file sys doesnt get out of hand
        let cleanup = await removeImageDir();
        // prepedPropertyArray needs to be uploaded to db, then loop reran again and again 
        
        //print to console the next URL to get the next set of propertys

        console.log("NEXT PROPERTY SET LINK, 1st print");
        console.log(propertyInfo.nextLink); 
      
        //makes db feed async
        async function alertFeedDB() {
            console.log('starting db feed');
        };

        async function feedDBinit() {
            preppedPropertyArray.forEach((prop: Property)=>{
                createProperty(prop)
            })
        };

        alertFeedDB().then(res => feedDBinit());
        
        return propertyInfo.nextLink

    };


    async function feed2(nextlink: any) {

        let preInfo = await getNextPropertys(nextlink);
        let pInfo = await coerceProperty(preInfo);
        let prePrepPropertyArray: Property[] = await runImageConvert(pInfo.propertyArray);
        let preppedPropertyArray: Property[] = await runS3upload(prePrepPropertyArray);
        // clean up imgfolder here so file sys doesnt get out of hand
        let cleanup = await removeImageDir();
        // prepedPropertyArray needs to be uploaded to db, then loop reran again and again 
        
        //print to console the next URL to get the next set of propertys

        console.log("NEXT PROPERTY SET LINK, 1st print");
        console.log(pInfo.nextLink); 
      
        //makes db feed async
        async function alertFeedDB() {
            console.log('starting db feed');
        };

        async function feedDBinit() {
            preppedPropertyArray.forEach((prop: Property)=>{
                createProperty(prop)
            })
        };

        alertFeedDB().then(res => feedDBinit());
        
        setTimeout(()=>{
            console.log('waiting on db in loop');

        }, 10000)

        if(pInfo.nextLink){ 
            feed2(pInfo.nextLink);
        }else{
            return 'finished with upload'
        }

    };
   
    let nLink = await feed(pInfo);
        
    setTimeout(()=> {
        console.log('waiting on db upload')
    }, 10000)
        
    let result = await feed2(nLink);

    return result;



    
};
