import { convertImage } from "../utils/convertImage";


const tmpurl = "https://www.publicdomainpictures.net/pictures/500000/velka/vintage-kunst-musik-katzen.jpg"
const mlsid = "mlsidgoeshere";
const arrayidx = 1;

export async function testConvert() {
    const res = await convertImage(tmpurl, mlsid, arrayidx);
    return res;

};
