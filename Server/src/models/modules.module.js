import mongoose from 'mongoose';
import Joi from '@hapi/joi';
const noteSchema = new mongoose.Schema({
    //GI,ISIL
    note: {
        type: Number,
        min: '0',
        max: '20',
    },
    date: {
        type: Date,
        default: new Date()
    },
    description: {
        type: String,
        trim: true
    },
});


export const moduleSchema = new mongoose.Schema({
    //GI,ISIL
    name: {
        type: String,
        required: true,
        min: '2',
        max: '50',
        trim: true
    },
    note: [noteSchema]
});

export const ValidateModuleSchema = Joi.object({
    name: Joi.string().trim().required(),

    note: Joi.array().items(Joi.object(
        {
            note: Joi.number(),
            date: Joi.date(),
            description: Joi.string(),
        }
    ))
});

const Module = mongoose.model(' ', moduleSchema);
export default Module;