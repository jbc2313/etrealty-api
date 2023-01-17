import { checkSold } from "../dbUtils/checkDbModelsSold";
import { getPropertys } from "../utils/fetchPropertys";

export async function runCheckTest() {
    const propertys = await getPropertys();
    checkSold(propertys);


}
