import bcrypt from 'bcryptjs';
import { logger } from '../Config/winston.Config';
import config from 'config';
import jwt from 'jsonwebtoken';
export const HashPassword = async (pwd) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(pwd, salt);
        return hash;
    } catch (error) {
        logger.error({ Code: "CryptePassword", error });
    }
}

export const ComparePassword = async (pwd, hash) => {
    try {
        const isMatch = await bcrypt.compare(pwd, hash);
        return isMatch;
    } catch (error) {
        logger.error({ Code: "CryptePassword", error });
    }

}

export const generateJWTtoken = (payload) => {
    try {
        const token = jwt.sign(payload, config.get("jwtConfig.JWT_Private_Key"), { expiresIn: 604800 });
        return `bearer ${token}`;
    } catch (error) {
        logger.error({ Code: "jwtToken", error });
    }

}

