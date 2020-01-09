import mongoose from 'mongoose';

const uploadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: '2',
        max: '6',
        trim: true
    },
    description: {
        type: String,
        min: '5',
        max: '250',
        trim: true
    },
    path: { type: String, required: true }
});

const Upload = mongoose.model('Upload', uploadSchema);
export default Upload;
