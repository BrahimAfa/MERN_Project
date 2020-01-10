import mongoose from 'mongoose';
import { moduleSchema, ValidateModuleSchema } from './modules.module';
import Joi from '@hapi/joi';

export const groupSchema = new mongoose.Schema({
    //GI,ISIL
    code: {
        type: String,
        required: true,
        min: '2',
        max: '6',
        trim: true
    },
    //ginie informatique...
    name: {
        type: String,
        min: '5',
        max: '50',
        trim: true
    },
    modules: [moduleSchema],
});

export const ValidateGroupSchema = Joi.object({
    code: Joi.string().min(2).max(8).trim().required(),
    name: Joi.string().min(3).max(50).trim(),
    modules: Joi.array().items(ValidateModuleSchema)
});

export function ValidateGroup(data) {

    const Schema = Joi.object({
        code: Joi.string().min(2).max(8).trim().required(),
        name: Joi.string().min(3).max(50).trim().required(),
        modules: Joi.array().items(ValidateModuleSchema).required()
    });
    return Schema.validate(data);
}

const Group = mongoose.model('Group', groupSchema);
export default Group;