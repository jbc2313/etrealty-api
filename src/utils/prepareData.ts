
import { Property } from './property-type';

import { getPropertys } from "../utils/fetchPropertys";
import { coerceProperty } from './coercePropertyType';


export async function prepApiData() {
    let apiData = await getPropertys();
    // propertyInfo is an Object in the shape {propertyArray,nextLink,};
    let propertyInfo = await coerceProperty(apiData);
    return propertyInfo;
}
