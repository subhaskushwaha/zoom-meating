import express from "express";
import {createServer} from "node:http";
import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/scoketmanager.js";

import cors from "cors";

const app = express();
const Server = createServer(app);
const io = connectToSocket(Server);

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://subhaskushwahak:<626573aa>@cluster0.4zbwu.mongodb.net/")

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    Server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });
}

start();