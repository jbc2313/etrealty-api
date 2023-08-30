
import { Property } from './property-type';

import { getPropertys } from "../utils/fetchPropertys";
import { coerceProperty } from './coercePropertyType';


export async function prepApiData() {
    let apiData = await getPropertys();
    let propertyArray: Property[] = await coerceProperty(apiData);
    return propertyArray;
}
