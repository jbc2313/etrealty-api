import { convertImage } from './convertImage';
import { Property } from './property-type';

// run each Property through the image convert function, and then upload images to s3
export async function runImageConvert(propArray: Property[]) {
    
    const size = propArray.length;

    for(let x = 0; x<size; x++){
        let preMediaArray = JSON.parse(propArray[x].Media);
        const preMediaArraySize = preMediaArray.length;
        let filepathArray = [];
        for(let z = 0; z<preMediaArraySize; z++){
            if(z<10){
                let filepath = await convertImage(preMediaArray[z].MediaURL, propArray[x].ListingId, z);
                filepathArray.push(filepath); 
            };
        };
        //testing
        //console.log(filepathArray);
        propArray[x].Media = JSON.stringify(filepathArray);
        console.log(propArray[x].Media);
    };

    return propArray;

};
