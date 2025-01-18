import express from "express";
import Logger from "./Utils/Logger.js";
import HealthRouter from "./Routes/health.js";
import FilesRouter from "./Routes/Files.js";
import DownloadFilesRouter from "./Routes/DownloadFiles.js";
import connectDb from './Utils/connection.js'
const app = express();

// Register Middlewares
app.use(Logger);



// Routes
app.use("/api/health", HealthRouter);
app.use("/api/files", FilesRouter);
app.use("/files", DownloadFilesRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async() => {
    const url = process.env.MONGODB_CONNECTION_URI;
    await connectDb(url);
    console.log(`Server Started On PORT ${PORT}`);
});
