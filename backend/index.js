import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import connectToMongo from "./connect.js";
import urlRoute from "./routes/url.route.js";

const app = express();
const loggingMiddleware = require('../LoggingMiddleware/loggingMiddleware'); 
// Enable CORS for all origins (you can restrict this in production)
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true
}));

connectToMongo("mongodb://localhost:27017/myapp")
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

    app.use(express.json());
    app.use("/url", urlRoute);

    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });