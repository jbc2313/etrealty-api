import { Property } from '../utils//property-type';
import { prepApiData } from '../utils/prepareData';

export async function test_prep_data () {
    let propertyArray: Property[] = await prepApiData();
    

    return propertyArray;

}
