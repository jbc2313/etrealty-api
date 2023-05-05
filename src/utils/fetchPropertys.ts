import axios from "axios";

const dotenv = require('dotenv');
dotenv.config()




const options = {
    method: 'GET',
    url: 'https://api-demo.mlsgrid.com/v2/Property?$filter=OriginatingSystemName%20eq%20%27hmls%27%20and%20MlgCanView%20eq%20true&$top=50',
    headers: {
      'Authorization': process.env.MLSGRID_TEST_TOKEN,
    }
};


// FETCH FROM MLS DATABASE
// this returns all propertys in the 64720 area, will eventually branch out to 20, then 50 miles north, south east and west


export const getPropertys = async () => { 
    const { data } = await axios.request(options)
    return {
        data
    }

}





