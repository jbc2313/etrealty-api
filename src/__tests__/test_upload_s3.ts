import { createObject } from "../s3utils/putS3Object";

export async function test_upload_s3(key: string, filepath: string) {

   let res = await createObject(key, filepath);

    return res;

};
