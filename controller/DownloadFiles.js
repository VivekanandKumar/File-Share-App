import File from "../models/File.js";
import fs from "node:fs";
export default {
    downloadFile: async (req, res) => {
        try {
            const id = req.params.id;
            const FileDetails = await File.findOne({ uuid: id }, "fileName originalFilename fileSize");
            if (!FileDetails) throw new Error("File not Found");
            const FileUrl = "uploads/" + FileDetails.fileName;
            const stream = fs.createWriteStream(FileUrl);
            res.set
            stream.on("open", () => res.pipe(stream));
            stream.on("error", () => res.end(1));
        } catch (error) {
            return res.status(500).json({ error: error?.message || "" });
        }
    },
};
