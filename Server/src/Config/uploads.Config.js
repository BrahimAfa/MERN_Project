import multer from 'multer';
import path from 'path';
import debug from 'debug';
const debuger = debug("app:Uploads_Config");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("MULTER REQ ", req.user);
        if (req.user.role === "Student") {
            cb(null, 'src/Uploads/Students');
        } else if (req.user.role === "Admin") {
            cb(null, 'src/Uploads/Users');
        } else {
            cb(null, 'src/Uploads');
        }
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().getTime()}-${file.originalname}`);
    }
});
//I can add filter here but it doesn't matter at this moment...
const imageFilter = function (req, file, cb) {
    if (!file.originalname.toLowerCase().match(/\.(ppt|pptx|doc|docx|pdf|png|jpg|jpeg)$/)) {
        req.fileValidationError = 'Only document files are allowed!';
        return cb(new Error('Only document files are allowed!'), false);
    }
    cb(null, true);
}

const multerUpload = multer({
    storage,
    limits: {
        //Max Size 5mb
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: imageFilter
});

export default multerUpload;