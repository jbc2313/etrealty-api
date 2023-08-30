
import { runImageConvert } from './runImageConvert';
import { prepApiData } from './prepareData';
import { Property } from './property-type';


export async function initialFeed() {

    let propertyArray: Property[] = await prepApiData();
    let prePrepPropertyArray: Property[] = await runImageConvert(propertyArray);




};
