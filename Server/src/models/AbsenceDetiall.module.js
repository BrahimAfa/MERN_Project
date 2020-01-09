import mongoose from 'mongoose';
import { groupSchema } from './Group.module';

const studentSchema = new mongoose.Schema({
    
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
    group: {
        type: groupSchema,
        required: true
    },

});
const justificationSchema = new mongoose.Schema({
    discription: {
        type: String,
        max: 250
    },
    date: {
        type: Date,
        default: Date.now
    },
    justified: {
        type: Boolean,
        default: false
    }

});

const absenceDetaill = new mongoose.Schema({
    absence: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Absence'
    },
    student: {
        type: studentSchema,
        required: true,
    },
    justification: {
        type: justificationSchema,
        required: true
    }
});


export const Absence_Detail = mongoose.model('Absence_Detail', absenceDetaill);