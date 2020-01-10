import { ExtractJwt, Strategy } from 'passport-jwt'
import config from 'config'
import User from '../models/User.module';
import debug from 'debug';
import { to } from "await-to-js";
const Debuger = debug("app:auth_Config");

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.get('jwtConfig.JWT_Private_Key')
}

const validateCallback = async (payload, done) => {
    Debuger("Payload ==>", payload);
    //if (!payload) return done(null, false);
    //to() allows to avoid try catch by returning an array of error,value
    const [err, result] = await to(User.findOne({ _id: payload.id }).select("-uploads -group -password -__v"));
    if (err) return done(err, false);
    Debuger("no error");

    if (result) {
        //result.role = role;
        return done(null, result);
    }
    Debuger("no result");
    return done(null, false);

}

export const Strategy = new Strategy(opts, validateCallback);