import { getPropertys } from "../fetchPropertys";

export const runTest = () => {
    getPropertys()
    .then(data => {
        console.log(data.totalApiProperty)
    })
}

