import { writeFile, mkdir } from 'node:fs/promises';
//const fsPromises = fs.promises;
//
import axios from 'axios';

import path from 'path';


const folderpath = "../../imgfolder/";

//test image link
// https://www.google.com/imgres?imgurl=https%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fthumb%2f4%2f4f%2fneovim-logo.svg%2f2560px-neovim-logo.svg.png&tbnid=6umabjwefiu7om&vet=12ahukewjxyf-41_-aaxx-o94ahc3razsqmyg_eguiarcfag..i&imgrefurl=https%3a%2f%2fcommons.wikimedia.org%2fwiki%2ffile%3aneovim-logo.svg&docid=mons9hlxixiolm&w=2560&h=738&q=neovim&hl=en&ved=2ahukewjxyf-41_-aaxx-o94ahc3razsqmyg_eguiarcfag

// working url
const tmpurl = "https://www.publicdomainpictures.net/pictures/500000/velka/vintage-kunst-musik-katzen.jpg"

// borked url for testing broken link
//const tmpurl = "https://www.publicdopictures.net/pictures/500000/velka/vintage-kunst-musik-katzen.jpg"



// have to make this function take in mlsurl, mlsid, idx of img array(for appending filename), 
export async function convertImage(mlsurl: string, mlsid: string, arrayidx: number) {


    let imgres=makeFolder().then((res:any)=>{
        const val=tmpImg(mlsurl, mlsid, arrayidx.toString(), folderpath).then((res:any)=>{
            return res;
        })
        return val;
    })

    return imgres;


};

async function makeFolder() {
   const res = await mkdir(path.resolve(__dirname, folderpath), {recursive: true});
   return res;
};

async function tmpImg(url: string, mlsid: string, arrayidx:string, file_path: string) {
    
    
        console.log('mlsimg download starting');
        const fileResponse = await axios({
            url,
            method: 'GET',
            responseType: 'arraybuffer',
        }).catch(function (error) {
//            console.log(error.toJSON());
            return error.toJSON();
        });

        if (fileResponse.name == "Error"){
            return "MLS IMG URL IS BROKEN, MOVING ON";
        }else{
            const res = await writeFile(path.resolve(__dirname, file_path) + "/" + mlsid + "-" + arrayidx +".jpg", fileResponse.data)
       
            if (res == undefined){
                let msg = path.resolve(__dirname, file_path)+ "/" + mlsid + "-" + arrayidx + ".jpg";
                console.log(`${msg} was temporarily saved.`);
                return msg;
            };

            return res;
       
        }


};

// could be implemented with fetch if node and fetch fucking working properly with typscript
    /*
    // @ts-ignore
    .then((res)=> res.arrayBuffer())
    // @ts-ignore
    .then(bytes => fs.writeFileSync(path.resolve(__dirname, file_path) + mlsid+"unique",bytes))
    // @ts-ignore
    .catch(e => console.error(e));

*/


