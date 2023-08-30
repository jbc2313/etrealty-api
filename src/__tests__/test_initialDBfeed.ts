import { initialFeed } from "../utils/initialFeed";
import { runS3upload } from "../utils/runS3upload";

export async function testinitialDBfeed() {

    let PropertyArray = await initialFeed();

    return PropertyArray;
};
