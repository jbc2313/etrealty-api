import { Property } from '../utils//property-type';
import { prepApiData } from '../utils/prepareData';

export async function test_prep_data () {
    let propertyInfo = await prepApiData();
    
    //let propertyArray: Property[] = propertyInfo.propertyArray;

    //return propertyArray;

    return propertyInfo

}
