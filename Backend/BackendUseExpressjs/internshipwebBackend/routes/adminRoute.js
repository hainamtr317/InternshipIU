const express = require("express")
const routers = express.Router()

const {SetTeacherandStudent} = require("../controllers/AdminController")

routers.route("/admin/setTeacherAndStudent").post(SetTeacherandStudent)


module.exports = routers;