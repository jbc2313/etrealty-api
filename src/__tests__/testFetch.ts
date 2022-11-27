import { getPropertys } from "../utils/fetchPropertys";

export const runTest = () => {
    getPropertys()
    .then(data => {
        console.log("entire returned object =>>", data.apiProps)
        console.log("total props in api", data.totalApiProperty)
        //console.log("DATA OBJ => ", data)
    })
}

