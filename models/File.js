import { Schema, model } from "mongoose";

const FileSchema = new Schema(
    {
        fileName: String,
        originalFilename: String,
        fileSize: Number,
        mimeType: String,
        uuid: String,
    },
    { timestamps: true }
);

export default model("File", FileSchema);
