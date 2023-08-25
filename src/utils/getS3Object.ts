import { GetObjectCommand, GetObjectCommandInput } from "@aws-sdk/client-s3";
import { ReadableStreamDefaultReadResult } from "node:stream/web";
//import { PathOrFileDescriptor, readFileSync } from "fs";
import { s3Client } from './s3client';
//env import
const dotenv = require('dotenv');
dotenv.config()

//this seems to work for text based files.


export async function getS3Object(key: string) : Promise<string | undefined> {
  const bucketname = process.env.AWS_BUCKET;
  const streamToString = (stream : NodeJS.ReadableStream | ReadableStream | Blob) =>
    new Promise<string>(async(resolve, reject) => {
      try {
        var njrs = stream as NodeJS.ReadableStream;
        var rs = stream as ReadableStream<Uint8Array>;
        var blob = stream as Blob;

        if (njrs !== undefined) {
          const chunks = [new Uint8Array()];
          njrs.on("data", (chunk : Uint8Array) => chunks.push(chunk));
          njrs.on("error", reject);
          njrs.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
        } else if (rs !== undefined) {
          const chunks = [new Uint8Array()];
          var reader: ReadableStreamDefaultReader<Uint8Array> = rs.getReader();
          while (true) {
            const promiseResult : Promise<ReadableStreamDefaultReadResult<any>> = reader.read();
            const readResult : ReadableStreamDefaultReadResult<any> = await promiseResult;
            if (readResult.done) {
              break;
            }

            if (readResult.value) {
              chunks.push(readResult.value);
            }
          }
          resolve(Buffer.concat(chunks).toString("utf8"))
        } else if (blob !== undefined) {
          var str = await blob.text();
          resolve(str);
        } else {
          reject("no matching type");
        }
      } catch (err) {
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
