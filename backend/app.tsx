import express from "express";
import http from "http";
import { Server } from "socket.io";
import initializeGame from "./gameLogic";

const app = express();

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (client) => {
  initializeGame(io, client);
});

server.listen(process.env.PORT || 8000)