const express = require("express")
const routers = express.Router()

const {getUsers,userLogin,userRegister,forgotPassword,getUserData,CheckLogged} = require("../controllers/UserController")

routers.route("/users").get(getUsers)
routers.route("/users/register").post(userRegister)
routers.route("/users/login").post(userLogin)
routers.route("/users/checkLogged").get(CheckLogged)
routers.route("/users/getUserData").post(getUserData)
routers.route("/users/forgotPassword").post(forgotPassword)

module.exports = routers;