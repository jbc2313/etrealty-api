import { createObject } from '../s3utils/putS3Object';
import { Property } from './property-type';


export async function runS3upload(PropertyArray: Property[]) {

    const size = PropertyArray.length;
    for(let x = 0;x < size; x++){
        const updatedMediaArray = [];
        let filepatharray = JSON.parse(PropertyArray[x].Media);
        let filepatharraysize = filepatharray.length;
        for(let z = 0;z < filepatharraysize; z++){
            let filename = PropertyArray[x].ListingId + "-" + z.toString() + ".jpg";
            let result: any = await createObject(filename, filepatharray[z]); 
            updatedMediaArray.push(result.Location); 
            
            
        };
        PropertyArray[x].Media = JSON.stringify(updatedMediaArray);
    };
    
    

    return PropertyArray;
};
