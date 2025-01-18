import multer from "multer";
import path from "node:path";

// Multer configurations
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueFileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
        cb(null, uniqueFileName);
    },
});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1e6 * 10, // 10 MB Size limit
    },
});

export default upload;
