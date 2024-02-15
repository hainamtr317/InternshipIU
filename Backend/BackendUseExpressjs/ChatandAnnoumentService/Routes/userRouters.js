const express = require("express");
const routers = express.Router();
const {
  AddUserIntoRoom,
  sendMessage,
  DeleteUserIntoRoom,
} = require("../Controllers/messageControllers");
const { getUsers } = require("../Controllers/userControllers");

routers.route("/users").get(getUsers);
routers.route("/users/addRoom").post(AddUserIntoRoom);
routers.route("/users/deleteRoom").post(DeleteUserIntoRoom);
routers.route("/users/sendMsg").post(sendMessage);
module.exports = routers;
