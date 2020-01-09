import oracledb from 'oracledb';
import config from 'config';
import { POOLMAX, POOLMIN } from '../utils/Constants';
//(poolmin,poolmax ) This will create a pool with a fixed size that requires fewer 
//resources to manage – a good idea for pools that get consistent usage.
//after that i should resze UV_THREADPOOL_SIZE befor the call that uses the thread Pool
// const dbConfig = {
//     user: config.get("dbConfig.DB_User"),
//     password: config.get("dbConfig.DB_Password"),
//     connectString: config.get("dbConfig.DB_Connection"),
//     poolMin: POOLMIN,
//     poolMax: POOLMAX,
//     poolIncrement: 0,
// }
const initialize = async () => {
    try {
        const pool = await oracledb.createPool(dbConfig);
        console.log("database Connected");
    } catch (error) {
        console.log("Connection to database not Etablished...");
        process.exit(1);
    }

}

const close = async () => {
    await oracledb.getPool().close();
}

export function sqlExecute(statement, binds = [], opts = {}) {
    return new Promise(async (resolve, reject) => {
        let conn;
        opts.outFormat = oracledb.OBJECT;
        opts.autoCommit = true;
        try {
            conn = await oracledb.getConnection();
            const result = await conn.execute(statement, binds, opts);
            resolve(result);
        } catch (err) {
            reject(err);
        } finally {
            if (conn) { // conn assignment worked, need to close
                try {
                    await conn.close();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    });
}

//module.exports.simpleExecute = sqlExecute;
module.exports.initDBConnection = initialize;
module.exports.closeDBConnection = close;