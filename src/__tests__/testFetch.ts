import { getPropertys } from "../utils/fetchPropertys";

// this has not been updated for MLS GRID

export const runTest = async () => {
    const homedata = getPropertys()
    .then(data => {
        console.log("DATA OBJ => ", data.data)
        return data.data
    })

    return homedata
}

