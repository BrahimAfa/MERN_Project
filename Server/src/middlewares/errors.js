import { logger } from '../Config/winston.Config'
function errorHandling(err, req, res, next) {
    //log err to a file
    // winston(err.message, err);
    logger.error({ Code: "MiddlewareErrorHandler", error: err });
    res.status(500).json({ message: err.message, ok: 0 });

}
export default errorHandling;