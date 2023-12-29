const express = require("express")
const routers = express.Router()

const {SetTeacherandStudent,CreateAnnounce,getUserDataToManager} = require("../controllers/AdminController")

routers.route("/admin/setTeacherAndStudent").post(SetTeacherandStudent)
routers.route("/admin/createAnnounce").post(CreateAnnounce)
routers.route("/admin/getUserData").post(getUserDataToManager)


module.exports = routers;