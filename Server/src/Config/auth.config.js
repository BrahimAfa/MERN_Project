import { ExtractJwt, Strategy } from 'passport-jwt'
import config from 'config'
import Professor from '../models/Professor.module';
import Student from '../models/Student.module';
import debug from 'debug';
import { to } from "await-to-js";
const Debuger = debug("app:auth_Config");

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.get('jwtConfig.JWT_Private_Key')
}
const getUserDataBasedOnRole = async (payload) => {
    // const value = role.toLowerCase()
    Debuger('role in lowwer cas', payload.role.toLowerCase());
    switch (payload.role.toLowerCase()) {
        case 'professor':
            return await to(Professor.findOne({ _id: payload.id }).select("-uploads -group -password -__v"));
        case 'student':
            return await to(Student.findOne({ _id: payload.id }).select("-uploads -group -password -__v"));
        case 'admin':
            return await to(Professor.findOne({ _id: payload.id }).select("-group -password -__v"));
        default:
            to(new Promise((res, rej) => rej("Role Doesn't exist")));
            break;
    }
}

const validateCallback = async (payload, done) => {
    Debuger("Payload ==>", payload);
    //if (!payload) return done(null, false);
    //to() allows to avoid try catch by returning an array of error,value
    let [err, result] = await getUserDataBasedOnRole(payload)
    if (err) return done(err, false);
    Debuger("no error");

    if (result) {
        result = { ...{ role: payload.role }, ...result._doc, };
        //result.role = role;
        return done(null, result);
    }
    Debuger("no result");
    return done(null, false);

}

export const UserStrategy = new Strategy(opts, validateCallback);