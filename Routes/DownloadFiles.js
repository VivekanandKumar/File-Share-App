import express from "express";
const Router = express.Router();

import DownloadFileController from "../controller/DownloadFiles.js";

Router.get("/:id", DownloadFileController.downloadFile);

export default Router;
