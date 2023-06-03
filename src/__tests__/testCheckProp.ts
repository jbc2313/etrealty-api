import { checkSold } from "../dbUtils/checkDbModelsSold";
import { getPropertys } from "../utils/fetchPropertys";



// this has not been updated for MLS GRID

export async function runCheckTest() {
    const propertys = await getPropertys();
    checkSold(propertys);


}
