import { createObject } from './putS3Object';
import { writeFile } from 'node:fs/promises';
//const fsPromises = fs.promises;
//
import axios from 'axios';

import path from 'path';

// TODO
// create a function to download the image from mls to temp file. - DONE, need to handle error so junk isnt uploaded to S3
// then upload the file to s3 and return the link
// put the s3 link in the Media key of the property.
// the MEdia key is json so we can save a string array of multiple image urls

//test image link
// https://www.google.com/imgres?imgurl=https%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fthumb%2f4%2f4f%2fneovim-logo.svg%2f2560px-neovim-logo.svg.png&tbnid=6umabjwefiu7om&vet=12ahukewjxyf-41_-aaxx-o94ahc3razsqmyg_eguiarcfag..i&imgrefurl=https%3a%2f%2fcommons.wikimedia.org%2fwiki%2ffile%3aneovim-logo.svg&docid=mons9hlxixiolm&w=2560&h=738&q=neovim&hl=en&ved=2ahukewjxyf-41_-aaxx-o94ahc3razsqmyg_eguiarcfag

const tmpurl = "https://www.publicdomainpictures.net/pictures/500000/velka/vintage-kunst-musik-katzen.jpg"


export async function convertImage() {
    const mlsimg = await tmpImg(tmpurl, "11111111_", "../../testfiles/");

    return mlsimg;

};


async function tmpImg(url: string, mlsid: string, file_path: string) {
    console.log('axios about to run');
    // have to use ts ignore due to github issue 
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/60924
    const fileResponse = await axios({
        url,
        method: 'GET',
        responseType: 'arraybuffer',
    });

    const res = await writeFile(path.resolve(__dirname, file_path) + mlsid + "uniquename.jpg", fileResponse.data)
   
    if (res == undefined){
        let msg = path.resolve(__dirname, file_path)+mlsid+"uniquename.jpg";
        console.log(`${msg} was temporarily saved.`);
        return msg;
    };

    return res;
   



// could be implemented with fetch if node and fetch fucking working properly with typscript
    /*
    // @ts-ignore
    .then((res)=> res.arrayBuffer())
    // @ts-ignore
    .then(bytes => fs.writeFileSync(path.resolve(__dirname, file_path) + mlsid+"unique",bytes))
    // @ts-ignore
    .catch(e => console.error(e));

*/


};
