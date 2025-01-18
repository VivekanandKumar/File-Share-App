import express from 'express';
const Router = express.Router();
import upload from '../Utils/Uploads.js'
import FileController from '../controller/Files.js'

Router.post('/', upload.single('file'), FileController.uploadFile);
Router.get('/')

export default Router;