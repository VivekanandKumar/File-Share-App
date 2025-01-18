import express from "express";
const Router = express.Router();
import upload from "../Utils/Uploads.js";
import FileController from "../controller/Files.js";

Router.post("/upload", upload.single("file"), FileController.uploadFile).get("/download/:id", FileController.downloadFile);

export default Router;
