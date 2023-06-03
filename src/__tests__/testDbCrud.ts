import { feed } from '../utils/feedDb';
import { getPropertys } from "../utils/fetchPropertys";

// this has not been updated for MLS GRID

export const runFeed = async () => {
   const propertys = await getPropertys(); 
    feed(propertys);

}
