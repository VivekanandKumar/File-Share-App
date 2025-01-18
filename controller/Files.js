import File from "../models/File.js";
import { v4 } from "uuid";
import fs from "node:fs";
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
            const downloadUrl = process.env.BASE_URL + "/api/files/download/" + FileResponse.uuid;
            return res.status(201).send({ downloadUrl: downloadUrl });
        } catch (error) {
            return res.status(500).json({ error: error?.message || "" });
        }
    },

    downloadFile: async (req, res) => {
        try {
            const id = req.params.id;
            const FileDetails = await File.findOne({ uuid: id }, "fileName originalFilename fileSize mimeType");
            if (!FileDetails) throw new Error("File not Found");
            const FileUrl = "uploads/" + FileDetails.fileName;

            const headersMap = {
                "Content-Disposition": `attachment; filename="${FileDetails.originalFilename}"`,
                "Content-Type": FileDetails.mimeType,
                "Content-Length": FileDetails.fileSize,
            };
            res.set(headersMap);

            const stream = fs.createReadStream(FileUrl);
            stream.on("error", (err) => {
                throw new Error(err.message);
            });
            stream.on("close", () => {
                console.log("File Downloaded");
                fs.unlinkSync(FileUrl);
            });
            stream.on("data", (e) => {
                // res.send(e.length / 1024)
                // console.log(e);
            });
            stream.on("finish", () => {
                stream.close();
            });
            stream.pipe(res);
        } catch (error) {
            return res.status(500).json({ error: error?.message || "" });
        }
    },
};
