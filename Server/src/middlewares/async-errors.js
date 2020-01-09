//this is used to handele errors and to use one try catch tha handles all the route middleware errors
export function async_Errors (handler){
    return async (req,res,next)=>{
        try {

            await handler(req,res);

        } catch (ex) {
            //passes to the error midllware
            next(ex);
        }
    }
}