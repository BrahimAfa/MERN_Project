import mongoose from 'mongoose';
import debug from 'debug';
const debuger = debug("app:Database");
import config from 'config'
export const initializeDB = async () => {
    try {
        await mongoose.connect(config.get('dbConfig.DB_Connection'), { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
        debuger("database Connected...");
    } catch (error) {
        debuger("Connection to database not Etablished...");
        process.exit(1);
    }

}

export const closeDB = async () => {
    try {
        await mongoose.connection.close();
        debuger('Database Closed...');

    } catch (ex) {
        debuger('Database crushed While Closing...', ex);
        process.exit(1);
    }
}


async function getAll(Model) {

}

