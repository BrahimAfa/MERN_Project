import { handleServerErrors } from "./helpers";
const to = (promise) => {
    return promise
        .then(result => { return { data: result.data } })
        .catch(error => {
            console.log(error);
            return { error }
        });
}

export default to;