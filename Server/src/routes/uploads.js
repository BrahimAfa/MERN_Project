import express from 'express';
const upload = express.Router();
import debug from 'debug';
const debuger = debug("app:Uploads");
import multerUpload from '../config/uploads.Config'
import passportAuth, { IsAdmin } from '../middlewares/auth';
import Upload from '../models/Uploads.module';
import Student from '../models/Student.module';
import Professor from '../models/Professor.module';


upload.route('/student').post(passportAuth, multerUpload.single("fileUpload"), async (req, res) => {

        const { name, description } = req.body;
        const path = req.file.filename;
        const uploadfile = new Upload({ name, description, path });
        const doc = await uploadfile.save();
        const student = await Student.findOneAndUpdate({ _id: req.user._id },
                {
                        $push:
                        {
                                uploads: doc._id
                        }
                }, { new: true, useFindAndModify: false });
        res.status(200).json(student.uploads);
});

upload.route('/professor').post(passportAuth, multerUpload.single("file-upload"), async (req, res) => {

        const { name, description } = req.body;
        const path = req.file.filename;
        // console.log(imagePath);
        const uploadfile = new Upload({ name, description, path });
        const doc = await uploadfile.save();

        const prof = await Professor.findOneAndUpdate({ _id: req.user._id },
                {
                        $push:
                        {
                                uploads: doc._id
                        }
                }, { new: true, useFindAndModify: false });
        res.status(200).json(prof.uploads);
});

export default upload;


