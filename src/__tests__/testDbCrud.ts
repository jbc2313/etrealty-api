import { feed } from '../utils/feedDb';
import { getPropertys } from "../utils/fetchPropertys";

export const runFeed = async () => {
   const propertys = await getPropertys(); 
    feed(propertys);

}
