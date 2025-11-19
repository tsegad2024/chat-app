import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from "path";
import { connectDB } from "./lib/db.js";
import authRoute from "./routes/auth.router.js"
import messageRoute from "./routes/message.route.js"
import { app, server } from "./lib/socket.js";


dotenv.config();
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

if (process.env.NODE_ENV === "production") {
    const frontendDistPath = path.join(__dirname, "../frontend/dist");
    
    // Serve static files
    app.use(express.static(frontendDistPath));

    // Catch-all route to serve index.html for SPA
    app.get('/*', (req, res) => {
        res.sendFile(path.join(frontendDistPath, 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log("SERVER IS RUNNING ON PORT " + PORT);
    connectDB();
})