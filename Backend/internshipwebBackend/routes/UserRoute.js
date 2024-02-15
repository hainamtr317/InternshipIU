const express = require("express");
const routers = express.Router();

const {
  getUsers,
  userLogin,
  userRegister,
  UserUpdate,
  forgotPassword,
  getUserData,
  CheckLogged,
  getAnnounce,
  updateUserData,
  UserLogout,
  UserReadAnnounce,
} = require("../controllers/UserController");

routers.route("/users").get(getUsers);
routers.route("/users").put(UserUpdate);
routers.route("/users/register").post(userRegister);
routers.route("/users/login").post(userLogin);
routers.route("/users/dataUserUpdate").put(updateUserData);
routers.route("/users/checkLogged").get(CheckLogged);
routers.route("/users/getUserData").post(getUserData);
routers.route("/users/forgotPassword").post(forgotPassword);
routers.route("/users/Announce").post(getAnnounce);
routers.route("/users/logout").post(UserLogout);
routers.route("/users/readAnnounces").post(UserReadAnnounce);

module.exports = routers;
