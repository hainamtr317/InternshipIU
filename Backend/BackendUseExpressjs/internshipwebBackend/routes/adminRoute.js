const express = require("express")
const routers = express.Router()

const {SetTeacherandStudent,CreateAnnounce} = require("../controllers/AdminController")

routers.route("/admin/setTeacherAndStudent").post(SetTeacherandStudent)
routers.route("/admin/createAnnounce").post(CreateAnnounce)


module.exports = routers;