import { getPropertys } from "../utils/fetchPropertys";

export const runTest = async () => {
    const homedata = getPropertys()
    .then(data => {
        console.log("DATA OBJ => ", data.data)
        return data.data
    })

    return homedata
}

