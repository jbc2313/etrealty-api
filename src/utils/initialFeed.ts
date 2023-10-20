
import { runImageConvert } from './runImageConvert';
import { prepApiData } from './prepareData';
import { Property } from './property-type';
import { runS3upload } from './runS3upload';
import { createProperty } from '../dbUtils/createSingleProperty';
import { removeImageDir } from './cleanImgFolder';


// used after first fetch

import { coerceProperty } from './coercePropertyType';
import { getNextPropertys } from './contFetchProp';

export async function initialFeed() {

    let pInfo = await prepApiData();



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
     
/*

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

*/
    };
   
    feed(pInfo);

};
