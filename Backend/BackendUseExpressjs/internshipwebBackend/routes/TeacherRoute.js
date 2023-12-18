const express = require("express")
const routers = express.Router()

const {CreateTeacher,updateTeacher,saveTeacherToUser,addStudentToList} = require('../controllers/TeacherController')

routers.route("/teacher/saveTeacher").post(saveTeacherToUser)
routers.route("/teacher/addStudent").post(addStudentToList)
routers.route("/teacher").post(CreateTeacher)
routers.route("/teacher").put(updateTeacher)
routers.route("/teacher").delete()

module.exports = routers;