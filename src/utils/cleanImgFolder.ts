import { rm } from 'node:fs/promises';
//

import path from 'path';


const folderpath = "../../imgfolder/";

export async function removeImageDir(){
    console.log('cleanup running');
    rm(path.resolve(__dirname, folderpath), {recursive: true, force: true});
    console.log('cleanup finished');
}
