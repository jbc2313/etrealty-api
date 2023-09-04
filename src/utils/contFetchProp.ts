
import axios from "axios";

const dotenv = require('dotenv');
dotenv.config()

// this is the function that fetches 'all' the propertys from MLSGRID,
// this function should be used for initial database fill,
// and for routine updating of db info when the last modified date changes,
// the max returned is 500,

// URL without Media
// 'https://api-demo.mlsgrid.com/v2/Property?&$filter=OriginatingSystemName%20eq%20%27hmls%27%20and%20MlgCanView%20eq%20true&$top=10',

// FETCH FROM MLS DATABASE

export const getNextPropertys = async (nextUrl: string) => { 
    

    const options = {
        method: 'GET',
        url: nextUrl,
        headers: {
          'Authorization': process.env.MLSGRID_TEST_TOKEN,
        }
    };



    const { data } = await axios.request(options)
    return {
        data
    }

}


