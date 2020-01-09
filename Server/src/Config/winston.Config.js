import winston, { format, transports } from 'winston';
import { IS_PROD } from '../utils/Constants';
const { combine, ms, timestamp, prettyPrint } = format;

const fileTransporter = new transports.File({
    filename: '../logs/winston-logs.log',
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        ms(),
        prettyPrint()
    ),
    handleExceptions: true
});

const ConsoleTransporter = new transports.Console({

    format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple(),
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        ms(),
        prettyPrint()
    )
});

export const logger = winston.createLogger({
    format: combine(

        winston.format.json(),
        //winston.format.colorize({ all: true }),
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        prettyPrint(),
        ms(),
    ),
    transports: [
        new winston.transports.File({ filename: '../logs/winston-logs.log' }),
        new winston.transports.Console()
    ]
});

// export const logger = winston.createLogger({
//     format: winston.format.json(),
//     transports: [
//         new winston.transports.File({
//             filename: '../src/logs/winston-logs-1.log',
//             level: "info"
//         }),
//         new winston.transports.File({
//             filename: '../src/logs/winston-logs-33.log',
//             level: 'error'
//         }),
//     ]
// });


const Transporter = () => {
    return IS_PROD ? fileTransporter : ConsoleTransporter;

}

export default Transporter;
