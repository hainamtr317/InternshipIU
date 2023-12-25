const express = require("express")
const routers = express.Router()

const {CreateStudent,updateStudent,getStudent} = require('../controllers/StudentController')

// routers.route("/student/saveStudent").post(saveStudentToUser)
routers.route("/student/getStudent").post(getStudent)
routers.route("/student").post(CreateStudent)
routers.route("/student").put(updateStudent)
routers.route("/student").delete()

module.exports = routers;