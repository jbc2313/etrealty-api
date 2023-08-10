import { Property } from '../utils//property-type';
import { feed } from '../utils/feedDb';

export async function test_add_db (propertyArray: Property[]) {
    
    let feedResponse = await feed(propertyArray);

    return feedResponse
}
