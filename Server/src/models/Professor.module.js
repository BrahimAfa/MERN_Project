import mongoose from 'mongoose';
import { groupSchema, ValidateGroupSchema } from './Group.module';
import Joi from '@hapi/joi'
import jwt from 'jsonwebtoken';
const professorSchema = new mongoose.Schema({
    Matricul: {
        type: String,
        required: true,
        min: 3,
        max: 100,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        max: '1024',
        trim: true
    },
    email: {
        type: String,
        required: true,
        max: '250',
        trim: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
        min: '3',
        max: '50',
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        min: '3',
        max: '50',
        trim: true
    },
    
    birthdate: {
        type: Date,
        required: true,
    },
    group: {
        type: [groupSchema],
        ref: 'Group'
    },
    uploads: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Upload'
    }
});
//====> Information expert principle (Responsible)
// professorSchema.method.generateAuthToken = function () {
//     try {
//         const token = JWT.sign({email: this.email}, config.get("LoginConfig.JWT_Private_Key"));
//         return token;
//     } catch (error) {
//         logger.error({ Code: "jwtToken", error });
//     }
// }
//<=======
// group: {
//     type: [mongoose.Schema.Types.ObjectId],
//     ref: 'Group'
// }
export function validateProfessor(data) {
    const schema = Joi.object().keys({
        Matricul: Joi.string()
            .alphanum()
            .min(3)
            .max(100)
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
            .required(),
        //    repeat_password: Joi.ref('password'),
        birthdate: Joi.date()
            .max('now')
            .required(),

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr', 'ma'] } })
            .required(),

        firstName: Joi.string()
            .min(3)
            .max(50)
            .trim()
            .required(),
        lastName: Joi.string()
            .min(3)
            .max(50)
            .trim()
            .required(),
        group: Joi.array().items(ValidateGroupSchema)
    });

    return schema.validate(data);
}

const Professor = mongoose.model('Professor', professorSchema);
export default Professor; 