import { checkProp } from '../dbUtils/checkApiProperty' 
import { getPropertys } from '../utils/fetchPropertys'

export const testData = () => {
   getPropertys()
   .then(p => {
        checkProp(p.apiProps[0])
   })


}
