const { model } = require("mongoose");

const User = require("../models/Usermodel");
const Student = require("../models/studentModel");
const { StudentCV } = require("../models/Cvmodel");
const {
  StudentFindandUpdate,
  StudentFindOne,
  StudentCreateData,
  StudentFindById,
} = require("../models/studentModel");
const { TeacherFindbyID } = require("../models/Teachermodel");

const StudentRegister = async (req, res) => {
  try {
    const data = req.body.data;
    const { userId } = req.body;
    const user = await User.findById(userId);

    if (user) {
      try {
        const OjectStudent = user.userData;
        data.progressionStatus = 1;
        const updateStudent = await StudentFindandUpdate(
          OjectStudent.toString(),
          data
        );
        const updateTeacherData = await TeacherFindbyID(
          updateStudent.teacher.teacherID.toString()
        );
        await Promise.all(
          updateTeacherData.ListStudent.map(async (e, index) => {
            if (e.StudentId == updateStudent.StudentId) {
              updateTeacherData.ListStudent[index] = updateStudent;
              await updateTeacherData.save();
            }
          })
        ).then(async () => {
          return res.status(200).json({
            success: true,
            data: updateStudent,
          });
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          error: err,
        });
      }
    } else {
      return res.status(500).json({
        success: false,
        error: "can not fin user in database",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};
const updateStudent = async (req, res) => {
  try {
    const data = req.body.data;
    const { userId } = req.body;
    const user = await User.findById(userId);

    if (user) {
      try {
        const OjectStudent = user.userData;
        const updateStudent = await StudentFindandUpdate(
          OjectStudent.toString(),
          data
        );
        return res.status(200).json({
          success: true,
          data: updateStudent,
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          error: err,
        });
      }
    } else {
      return res.status(500).json({
        success: false,
        error: "can not fin user in database",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

const getStudent = async (req, res) => {
  const { StudentId } = req.body;
  try {
    const stu = await StudentFindOne({ StudentId: StudentId });
    if (stu) {
      return res.status(200).json({
        success: true,
        data: stu,
      });
    } else {
      console.log("can't fin student");
      return res.status(500).json({
        success: false,
        error: "can't find student",
      });
    }
  } catch (error) {
    const err = error;
    console.log(err);
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
};
const addReportForStudent = async (req, res) => {
  const { Report, StudentId } = req.body;
  const dataStudent = await StudentFindById(StudentId);
  try {
    if (dataStudent) {
      const updateStudent = await StudentFindandUpdate(StudentId, {
        report: Report,
        progressionStatus: 3,
      });
      const updateTeacherData = await TeacherFindbyID(
        updateStudent.teacher.teacherID.toString()
      );
      await Promise.all(
        updateTeacherData.ListStudent.map(async (e, index) => {
          if (e.StudentId == updateStudent.StudentId) {
            updateTeacherData.ListStudent[index] = updateStudent;
            await updateTeacherData.save();
            console.log("update success");
          }
        })
      ).then(async () => {
        return res.status(200).json({
          success: true,
          msg: "success add report to Student data",
        });
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "can't find student",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.toString(),
    });
  }
};

const CvCreateAndSave = async (req, res) => {
  const { Cv, NameCv, StudentId } = req.body;
  const dataStudent = await StudentFindById(StudentId);
  try {
    if (dataStudent) {
      const CvExit = await StudentCV.findOne({ NameCV: NameCv });
      if (CvExit) {
        return res.status(500).json({
          success: false,
          error: "Cv Exit in data",
        });
      } else {
        const newCv = await StudentCV.create({
          NameCV: NameCv,
          MainCv: false,
          LinkCv: Cv,
        });
        await dataStudent.Cv.push(newCv);
        await dataStudent.save();
        return res.status(200).json({
          success: true,
          msg: "success add Cv to Student data",
        });
      }
    } else {
      return res.status(500).json({
        success: false,
        error: "can't find student",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.toString(),
    });
  }
};
const setMainCv = async (req, res) => {
  const { studentId, CvId } = req.body;
  const dataStudent = await StudentFindById(studentId);
  try {
    if (dataStudent) {
      if (dataStudent.Cv.length > 0) {
        Promise.all(
          dataStudent.Cv.map((e, index) => {
            dataStudent.Cv[index].MainCv = false;
          })
        ).then(async () => {
          const MainIndex = await dataStudent.Cv.findIndex(
            (e) => e._id.toString() === CvId
          );
          dataStudent.Cv[MainIndex].MainCv = true;
          // dataStudent.mainCV = dataStudent.Cv[MainIndex];
          await dataStudent.save();

          return res.status(200).json({
            success: true,
            msg: "change main success",
          });
        });
      } else {
        return res.status(500).json({
          success: false,
          error: "can't find Cv list",
        });
      }
    } else {
      return res.status(500).json({
        success: false,
        error: "can't find student",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.toString(),
    });
  }
};

const DeleteCv = async (req, res) => {
  const { studentId, CvId } = req.body;
  const dataStudent = await StudentFindById(studentId);
  try {
    if (dataStudent) {
      if (dataStudent.Cv.length > 0) {
        await StudentCV.findByIdAndDelete(CvId);
        const MainIndex = await dataStudent.Cv.findIndex(
          (e) => e._id.toString() === CvId
        );
        await dataStudent.Cv.splice(MainIndex, 1);
        await dataStudent.save();
        return res.status(200).json({
          success: true,
          msg: "delete success",
        });
      } else {
        return res.status(500).json({
          success: false,
          error: "can't find Cv list",
        });
      }
    } else {
      return res.status(500).json({
        success: false,
        error: "can't find student",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.toString(),
    });
  }
};
const CreateStudent = async (req, res) => {
  try {
    const data = req.body.data;
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (user) {
      if (user.roles == "student") {
        try {
          const { StudentId } = data;
          const checkExit = await StudentFindOne({ StudentId: StudentId });
          if (!checkExit) {
            const newStudent = await StudentCreateData(data);
            user.userData = newStudent._id;
            await user.save();
            console.log("update Student and user success");
            return res.status(200).json({
              createSuccess: true,
              data: newStudent.StudentId,
            });
          } else {
            return res.status(404).json({
              createSuccess: false,
              error: "Student exit in database",
            });
          }
        } catch (err) {
          return res.status(500).json({
            createSuccess: false,
            error: err,
          });
        }
      } else {
        return res.status(500).json({
          createSuccess: false,
          error: "User is not student role",
        });
      }
    } else {
      return res.status(500).json({
        createSuccess: false,
        error: "can not fin user in database",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      createSuccess: false,
      error: err,
    });
  }
};
module.exports = {
  CreateStudent,
  updateStudent,
  getStudent,
  setMainCv,
  CvCreateAndSave,
  DeleteCv,
  addReportForStudent,
  StudentRegister,
};
