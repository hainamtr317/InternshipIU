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
app.use("/api", require("./Routes/userRouters"));
const server = http.createServer(app);
mongoose.connection.once("open", () => {
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
          socket.emit(" ", last100Messages);
        })
        .catch((err) => console.log(err));
    });

    socket.on("send_message", (data) => {
      //   const { message, username, room } = data;
      console.log(data);
      //   io.in(room).emit("receive_message", data);
      //   sendMessage(room, username, message) // Save message in db
      //     .then((response) => console.log(response))
      //     .catch((err) => console.log(err));
    });

    socket.on("leave_room", (data) => {
      const { username, room } = data;
      socket.leave(room);

      // Remove user from memory
      allUsers = leaveRoom(socket.id, allUsers);
      socket.to(room).emit("receive_message", {
        username: CHAT_BOT,
        message: `${username} has left the chat`,
      });
      console.log(`${username} has left the chat`);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected from the chat");
    });
  });
  server.listen(port, () => console.log(`Listening on port ${port}`));
});
