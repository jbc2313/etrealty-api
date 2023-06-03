import { checkProp } from '../dbUtils/checkApiProperty' 
import { getPropertys } from '../utils/fetchPropertys'

// THIS has not been updated for MLS GRID
//
// TEST property against DB straight from MLS api


export const testData = () => {
   getPropertys()
   .then(p => {
    // check prop to work with db schema  
       checkProp(p.apiProps[0])
   })


}
