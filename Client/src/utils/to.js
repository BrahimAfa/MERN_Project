import { handleServerErrors } from "./helpers";

const to = (promise) => {
    return promise
        .then(data => { return { error: null, data }; })
        .catch(error => { return handleServerErrors(error); });
}
export default to;