import { createObject } from "../utils/putS3Object";

export function test_upload_s3(key: string, filepath: string) {

    createObject(key, filepath);

};
