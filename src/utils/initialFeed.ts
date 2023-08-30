
import { runImageConvert } from './runImageConvert';
import { prepApiData } from './prepareData';
import { Property } from './property-type';
import { runS3upload } from './runS3upload';


export async function initialFeed() {

    let propertyArray: Property[] = await prepApiData();
    let prePrepPropertyArray: Property[] = await runImageConvert(propertyArray);
    let prepedPropertyArray: Property[] = await runS3upload(prePrepPropertyArray);

    return prePrepPropertyArray;



};
