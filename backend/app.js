import express from "express";
import {createServer} from "node:http";

import { Server } from "socket.io";

import mongoose, { connection } from "mongoose";


import cors from "cors";
import { connect } from "node:http2";

const app = express();
const server = createServer(app);
const io = connectToSocket(server)

app.set("port", (process.env.PORT || 8000))

app.get("/home", (req, res)=> {
    return res.json({"hello": "world"})
});

const start = async () => {
app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb://127.0.0.1:27017/apnavideocall");

    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`)
    Server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });
}

start();