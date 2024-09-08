import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import connectDB from "./utils/db.js";

import userRoute from "./routes/user.routes.js";

dotenv.config({});

const app = express();
const PORT = process.config.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());



app.get('/start', (req, res) => {
    return res.status(200).json({
        message: "Checking the server",
        success: true
    })
})

const corsOptions = {
    origin: 'http://localhost:5173/',
    credentials: true
}

app.use(cors(corsOptions))

app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on Port ${PORT}`)
})