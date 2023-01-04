import { checkProp } from '../dbUtils/checkApiProperty' 
import { getPropertys } from '../utils/fetchPropertys'

// TEST property against DB straight from MLS api


export const testData = () => {
   getPropertys()
   .then(p => {
    // check prop to work with db schema  
       checkProp(p.apiProps[0])
   })


}
