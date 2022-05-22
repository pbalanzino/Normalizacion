/** @format */

import express from "express";
import { Server } from "socket.io";
import __dirname from "./utils.js";
import { PORT } from "./config/config.js";
import knexConfig from "../db_messages/knexfile.js";
import knex from "knex";
import "dotenv/config";

const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});
const io = new Server(server);
const log = [];
// knex(knexConfig[process.env.NODE_ENV]);

io.on("connection", (socket) => {
    console.log("Client connected");
    socket.on("message", (data) => {
        log.push(data);
        io.emit("log", log);
    });
});
