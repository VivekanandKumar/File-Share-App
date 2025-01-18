import { Schema, model } from "mongoose";

const FileSchema = new Schema(
    {
        fileName: String,
        originalFilename: String,
        fileSize: Number,
        mimeType: String,
        uuid: String,
        deleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default model("File", FileSchema);
