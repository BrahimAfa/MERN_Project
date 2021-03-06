import mongoose from 'mongoose';
import { groupSchema, ValidateGroupSchema } from './Group.module';
import Joi from '@hapi/joi';
const userSchema = new mongoose.Schema({

    role: {
        type: String,
        required: true,
        min: '3',
        max: '20',
        trim: true
    },
    pictur: {
        type: String,
        default: "http://www.ietpune.com/img/teacher-img/user.png",
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
    CNE: {
        type: String,
        required: true,
        trim: true,
        maxlength: 13
    },
    CNI: {
        type: String,
        required: true,
        trim: true,
        maxlength: 13
    },
    gender: {
        type: String,
        min: 5,
        max: 10

    },
    absenceAVG: {
        type: Number,
        default: 0
    },
    tele: {
        type: String,
        min: 10,

    },
    email: {
        type: String,
        required: true,
        min: 5,
        max: '250',
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        max: '1024',
        trim: true
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

export function validateUser(data) {
    const schema = Joi.object({
        role: Joi.string()
            .valid('Admin', 'Professor', 'Student')
            .min(5)
            .max(20)
            .required(),
        CNE: Joi.string()
            .alphanum()
            .min(5)
            .max(13)
            .required(),
        CNI: Joi.string()
            .alphanum()
            .min(5)
            .max(13)
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
        gender: Joi.string()
            .min(4)
            .max(10)
            .trim()
            .required(),
        tele: Joi.string()
            .max(10)
            .trim(),
        absenceAVG: Joi.number(),
        group: Joi.array().items(ValidateGroupSchema).min(1).max(8)
    });

    return schema.validate(data);
}
const User = mongoose.model('User', userSchema);
export default User