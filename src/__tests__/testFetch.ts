import { getPropertys } from "../utils/fetchPropertys";

export const runTest = () => {
    getPropertys()
    .then(data => {
        console.log(data.totalApiProperty)
    })
}

