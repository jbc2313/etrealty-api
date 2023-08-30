import { createReadStream } from "fs";
import { Upload } from '@aws-sdk/lib-storage';
import { s3Client } from './s3client';
import path from 'path';
import stream from 'stream';
//env import
const dotenv = require('dotenv');
dotenv.config()



// on successful upload result.Location is the URL to the file

export async function createObject(key: string, file: string ) {
    //file and key are passed into function

    const bucket = process.env.AWS_BUCKET;
    // might not need to path.resolve the filepath, since path is absolute..
    // needs tested
    const fileContent = createReadStream(path.resolve(__dirname, file));
    const passThroughStream = new stream.PassThrough();
    
    let result;
    try{
        let uploadStream = new Upload({
        client: s3Client,
        params: {
                Bucket: bucket,
                Body: passThroughStream,
                Key: key
        },
        queueSize: 4,
        partSize: 1024 * 1024 * 5,
        leavePartsOnError: false,
        })
        
        uploadStream.on("httpUploadProgress", (progress) => {
          console.log(progress);
        });

        fileContent.pipe(passThroughStream);
        result = await uploadStream.done();
    }catch(err){
        console.log(err);
    };

    return result;
};

