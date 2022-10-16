import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode',
    params: {zipcode: '64720', offset: '0', limit: '2'},
    headers: {
      'X-RapidAPI-Key': '26142419bamsh2821cedacb5cb59p1b74f6jsn2b510a31f5e2',
      'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
    }
};

export const getPropertys = async () => { 
    const { data } = await axios.request(options)
    console.log(data.data)
}


/* Current results format... pickup here.. 
{
  home_search: { total: 66, count: 2, results: [ [Object], [Object] ] },
  geo: {
    parents: [ [Object], [Object], [Object] ],
    recommended_zips: { geos: [Array] },
    recommended_cities: { geos: [Array] },
    recommended_counties: { geos: [Array] },
    geo_statistics: { housing_market: [Object] },
    recommended_neighborhoods: { geos: [Array] }
  }
}
*/

