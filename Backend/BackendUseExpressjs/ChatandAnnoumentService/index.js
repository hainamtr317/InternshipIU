const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const connectDB = require("./config");
const http = require("http");
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const { sendMessage, getMessage } = require("./Controllers/messageControllers");
connectDB();
const port = process.env.PORT || 6001;
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
mongoose.connection.once("open", () => {
  app.use("/api", require("./Routes/userRouters"));
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });
  io.on("connection", (socket) => {
    console.log(`User connected ${socket.id}`);
    // Add a user to a room
    socket.on("join_room", (data) => {
      const { room } = data; // Data sent from client when join_room event emitted
      socket.join(room); // Join the user to a socket room
      // Get last 100 messages sent in the chat room
      getMessage(room)
        .then((last100Messages) => {
          // console.log('latest messages', last100Messages);
          socket.emit("last_100_messages", last100Messages);
        })
        .catch((err) => console.log(err));
    });

    socket.on("send_message", (data) => {
      const { message, sender, room } = data;
      sendMessage(room, sender, message) // Save message in db
        .then(async (response) => {
          await io.in(room).emit("receive_message", response);
        })
        .catch((err) => console.log(err));
    });

    socket.on("leave_room", (data) => {
      const { room } = data;
      console.log("userLeaveRoom");
      socket.leave(room);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected from the chat");
    });
  });
  server.listen(port, () => console.log(`Listening on port ${port}`));
});
