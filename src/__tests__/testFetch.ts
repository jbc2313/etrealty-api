import { getPropertys } from "../utils/fetchPropertys";

export const runTest = async () => {
    getPropertys()
    .then(data => {
        console.log("DATA OBJ => ", data.data)
        return data.data
    })
}

