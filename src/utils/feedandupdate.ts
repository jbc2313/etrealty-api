import { checkSold } from '../dbUtils/checkDbModelsSold';
import { feed } from '../utils/feedDb';
import { getPropertys } from "../utils/fetchPropertys";

export async function mainCronJob() {
    let propertys = await getPropertys();
    
    feed(propertys).then(resolved => {
        checkSold(propertys);
    })
}
