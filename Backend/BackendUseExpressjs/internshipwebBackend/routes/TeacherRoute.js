const express = require("express")
const routers = express.Router()

const {CreateTeacher,updateTeacher,saveTeacherToUser} = require('../controllers/TeacherController')

routers.route("/teacher/saveTeacher").post(saveTeacherToUser)
routers.route("/teacher").post(CreateTeacher)
routers.route("/teacher").put(updateTeacher)
routers.route("/teacher").delete()

module.exports = routers;