//import { getS3Object } from '../utils/getS3Object';
import { getS3ImageObject } from '../utils/getS3ImageObject';
export async function test_read_s3() {
    // for files
    //let content = await getS3Object("Jackhammer_2.gif");
    

    //for images
    let base64data = await getS3ImageObject("Jackhammer_2.gif");
    
    let image = "<img src='data:image/gif;base64," + base64data + "'" + "/>";
    let startHTML = "<html><body>"; //removed "</body>" from end here
    let endHTML = "</body></html>";
    let html = startHTML + image + endHTML;
    return html;
    

};
