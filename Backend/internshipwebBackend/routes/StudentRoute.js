const express = require("express");
const routers = express.Router();

const {
  CreateStudent,
  updateStudent,
  getStudent,
  setMainCv,
  CvCreateAndSave,
  DeleteCv,
  addReportForStudent,
  StudentRegister,
  ApplyJob,
} = require("../controllers/StudentController");

// routers.route("/student/saveStudent").post(saveStudentToUser)
routers.route("/student/getStudent").post(getStudent);
routers.route("/student").post(CreateStudent);
routers.route("/student").put(updateStudent);
routers.route("/student/ApplyJob").put(ApplyJob);
routers.route("/student").delete();
routers.route("/student/StudentRegister").put(StudentRegister);
routers.route("/student/AddCv").post(CvCreateAndSave);
routers.route("/student/SetMainCv").post(setMainCv);
routers.route("/student/DeleteStudentCv").post(DeleteCv);
routers.route("/student/report").post(addReportForStudent);

module.exports = routers;
