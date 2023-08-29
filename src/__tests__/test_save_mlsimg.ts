import { convertImage } from "../utils/convertImage";



export async function testConvert() {
    const res = await convertImage();
    return res;

};
