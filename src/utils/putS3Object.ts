import { PutObjectCommand } from "@aws-sdk/client-s3";
import { createReadStream } from "fs";
import { Upload } from '@aws-sdk/lib-storage';
import { s3Client } from './s3client';
import path from 'path';
import stream from 'stream';
//env import
const dotenv = require('dotenv');
dotenv.config()


export async function createObject(key: string, file: string ) {
    //file and key are passed into function

    const bucket = process.env.AWS_BUCKET;
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


/*
export async function createObject(key: string, file: string ) {
    //file and key are passed into function

    const bucket = process.env.AWS_BUCKET;
    const fileContent = createReadStream(path.resolve(__dirname, file));
    const passThroughStream = new stream.PassThrough();
    const destStream = new stream.PassThrough();
    const sameStream = fileContent.pipe(passThroughStream);
    
    let upload = await s3Client.send(new PutObjectCommand({  
            Bucket: bucket,
            Body: destStream,
            Key: key,
            ContentLength: passThroughStream.readableLength

    }));

    passThroughStream.on('data', function (chunk) {
        destStream.write(chunk)
    });

    passThroughStream.on('end', function () {
        destStream.end();
    });
        
    let result = upload;

    return result;
};
*/
