import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");  // Ensure this folder exists
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

export const Upload = multer({ storage });
