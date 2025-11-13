import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { connectDB } from "./lib/db.js";
import authRoute from "./routes/auth.router.js"
import messageRoute from "./routes/message.route.js"

const app = express();
dotenv.config();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
// app.use(express.json())

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("SERVER IS RUNNING ON PORT " + PORT);
    connectDB();
})