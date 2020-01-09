import mongoose from 'mongoose';
const profSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: true,
        min: '3',
        max: '50',
        trim: true
    },
    PrCode: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 100
    }
});
const absenceSchema = new mongoose.Schema({
    Seance: {
        type: String,
        required: true,
        min : 2,
        max : 4
    },
    dateAbsence: {
        type: Date,
        required: true,
    },
    professor: {
        type: profSchema,
        required: true
    }
});

export const Absence = mongoose.model('Absence', absenceSchema);