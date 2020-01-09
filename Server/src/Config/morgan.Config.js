
import fs from 'fs';
import morgan from 'morgan'
import path from 'path';
const logDirectory = '../logs';
import { Prod_logFormate, IS_PROD } from '../utils/Constants'

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
const accessLogStream = fs.createWriteStream(path.join(__dirname, `${logDirectory}/morgan-logs.log`), { flags: 'a' })
const logFormate = IS_PROD ? Prod_logFormate : "dev";
morgan.token('id', function getId(req) {
    return req.id
});
//log in logs/errors.logs and only log 4xx and 5xx errors

const morganProd = morgan(logFormate, {
    stream: accessLogStream,
    skip: function (req, res) { return res.statusCode < 400 }
});
export const morganMiddleware = IS_PROD ? morganProd : morgan(logFormate);