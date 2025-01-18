import mongoose from "mongoose";

export default (url) => {
    const connection = mongoose.connection;
    connection.on("connected", () => {
        console.log("Database Connection Successfully.");
    });

    connection.on("error", () => {
        console.error("Error in Database Connection");
    });

    connection.on("disconnected", function () {
        console.log("Database disconnected.");
    });

    return mongoose.connect(url);
};
