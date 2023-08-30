import { GetObjectCommand, GetObjectCommandInput } from "@aws-sdk/client-s3";
//import { PathOrFileDescriptor, readFileSync } from "fs";
import { s3Client } from './s3client';
//env import
const dotenv = require('dotenv');
dotenv.config()

// on successful get, returns base64 encoded file, ready to be displayed in html img tag
export async function getS3ImageObject(key: string) : Promise<string | undefined> {
  const bucketname = process.env.AWS_BUCKET;
  const streamToString = (stream : NodeJS.ReadableStream | ReadableStream | Blob) =>
    new Promise<string>(async(resolve, reject) => {
      try {
        var njrs = stream as NodeJS.ReadableStream;
        if (njrs !== undefined) {
          const chunks = [new Uint8Array()];
          njrs.on("data", (chunk : Uint8Array) => chunks.push(chunk));
          njrs.on("error", reject);
          njrs.on("end", () => resolve(Buffer.concat(chunks).toString("base64")));
        }
      }catch (err) {
        console.error(err);
        reject("error");
      }
    }
  );
  var input: GetObjectCommandInput = {Bucket: bucketname, Key: key};
  const command = new GetObjectCommand(input);
  const response = await s3Client.send(command);
  if (response.$metadata.httpStatusCode == 200) {
    if (response.Body) {
      const body = await streamToString(response.Body);
      return body;
    } else {
      console.warn(`GetObject did not have body for ${bucketname}/${key}`);
      return undefined;
    }
  } else {
    var str = JSON.stringify(response.$metadata);
    console.warn(`GetObject did not receive 200 for ${bucketname}/${key}. Metadata is ${str}`);
    return undefined;
  }
}
