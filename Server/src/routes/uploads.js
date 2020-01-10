import express from 'express';
const upload = express.Router();
import debug from 'debug';
const debuger = debug("app:Uploads");
import multerUpload from '../config/uploads.Config'
import passportAuth, { IsAdmin } from '../middlewares/auth';
import Upload from '../models/Uploads.module';
import User from '../models/User.module';

upload.route('/').post(passportAuth, multerUpload.single("fileUpload"), async (req, res) => {

        const { name, description } = req.body;
        const path = req.file.filename;
        const uploadfile = new Upload({ name, description, path });
        const doc = await uploadfile.save();
        const user = await User.findOneAndUpdate({ _id: req.user._id },
                {
                        $push:
                        {
                                uploads: doc._id
                        }
                }, { new: true, useFindAndModify: false });
        res.status(200).json(user.uploads);
});

export default upload;


