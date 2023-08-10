import { Property } from '../utils//property-type';
import { createProperty } from '../dbUtils/createSingleProperty';
export async function test_feed_one_property (propertyArray: Property[]) {
    
    let feedResponse = await createProperty(propertyArray[0]);

    return feedResponse
}
