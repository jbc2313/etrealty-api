import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode',
    params: {zipcode: '64720', offset: '0', limit: '50'},
    headers: {
      'X-RapidAPI-Key': '26142419bamsh2821cedacb5cb59p1b74f6jsn2b510a31f5e2',
      'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
    }
};


// FETCH FROM MLS DATABASE
// this returns all propertys in the 64720 area, will eventually branch out to 20, then 50 miles north, south east and west


export const getPropertys = async () => { 
    const { data } = await axios.request(options)
//    console.log(data.data.home_search)
    const totalApiProperty = data.data.home_search.total // total number of propertys in api
    const apiProps = data.data.home_search.results // array of propertys
    // console.log("props =>", apiProps)
    // console.log("Total Props", totalApiProperty)
    return {
        totalApiProperty,
        apiProps
    }

}







/* Current shape of data returned from data.data.home_search

{
  total: 66,
  count: 2,
  results: [
    {
      primary_photo: [Object],
      last_update_date: '2022-10-14T09:35:20Z',
      source: [Object],
      tags: [Array],
      permalink: '441-E-8th-St_Adrian_MO_64720_M84514-33077',
      status: 'for_sale',
      list_date: '2022-10-14T15:36:54Z',
      open_houses: null,
      tax_record: [Object],
      branding: [Array],
      photos: [Array],
      coming_soon_date: null,
      list_price: 149900,
      matterport: false,
      property_id: '8451433077',
      flags: [Object],
      lead_attributes: [Object],
      community: null,
      products: [Object],
      virtual_tours: null,
      description: [Object],
      listing_id: '2948892151',
      price_reduced_amount: null,
      location: [Object],
      other_listings: [Object]
    },
    {
      primary_photo: [Object],
      last_update_date: '2022-10-02T20:42:13Z',
      source: [Object],
      tags: [Array],
      permalink: '13900-355th-St_Adrian_MO_64720_M88882-09488',
      status: 'for_sale',
      list_date: '2022-10-03T01:39:35Z',
      open_houses: null,
      tax_record: [Object],
      branding: [Array],
      photos: [Array],
      coming_soon_date: null,
      list_price: 885000,
      matterport: false,
      property_id: '8888209488',
      flags: [Object],
      lead_attributes: [Object],
      community: null,
      products: [Object],
      virtual_tours: null,
      description: [Object],
      listing_id: '2948460281',
      price_reduced_amount: null,
      location: [Object],
      other_listings: [Object]
    }
  ]
}

*/

