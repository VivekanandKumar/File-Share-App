import File from "../models/File.js";
import { v4 } from "uuid";
export default {
    uploadFile: async (req, res) => {
        try {
            if (!req.file) throw new Error("Please Select a file to upload");
            const newFile = new File({
                fileName: req.file.filename,
                originalFilename: req.file.originalname,
                fileSize: req.file.size,
                mimeType: req.file.mimetype,
                uuid: v4(),
            });
            const FileResponse = await newFile.save();
            const downloadUrl = process.env.BASE_URL + "/files/" + FileResponse.uuid;
            return res.status(201).send({ downloadUrl: downloadUrl });
        } catch (error) {
            return res.status(500).json({ error: error?.message || "" });
        }
    },
};
