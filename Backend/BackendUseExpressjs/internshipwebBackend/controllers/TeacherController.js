const { model } = require("mongoose");

const User = require("../models/Usermodel");
const Teacher = require("../models/Teachermodel");
const Student = require("../models/studentModel");
const {
  TeacherFindandUpdate,
  TeacherFindbyID,
  TeacherFindOne,
  TeacherCreateData,
} = require("../models/Teachermodel");
const {
  StudentFindandUpdate,
  StudentFindById,
  StudentFindOne,
  StudentCreateData,
} = require("../models/studentModel");

const UpdateStudentDataTeacher = async (req, res) => {
  const { userId } = req.body;
  try {
    const getUser = await User.findById(userId);
    if (getUser) {
      try {
        const teacher = await TeacherFindbyID(getUser.teacherData.toString());
        let listStudentId = [];
        await teacher.ListStudent.map((e) => {
          listStudentId.push(e._id);
        });

        try {
          await Promise.all(
            listStudentId.map(async (e) => {
              const student = await StudentFindById(e.toString());
              return student;
            })
          ).then(async (value) => {
            teacher.ListStudent = value;
            await teacher.save();
          });
          console.log("update success student in ", teacher.TeacherID);
          return res.status(200).json({
            success: true,
            data: teacher.ListStudent,
          });
        } catch (error) {
          console.log(errors);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return res.status(500).json({
        success: false,
        error: "can not find user in database",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

const GradingStudent = async (req, res) => {
  try {
    const { StudentId, data } = req.body;
    const userStudent = await StudentFindOne({ StudentId: StudentId });
    if (userStudent) {
      try {
        console.log(userStudent._id);
        console.log(data);
        const updateStudent = await StudentFindandUpdate(
          userStudent._id.toString(),
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
        error: "can not find student in database",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const { teacherId, data } = req.body;
    const updateTeacher = await TeacherFindandUpdate(teacherId, data);
    if (updateTeacher) {
      return res.status(200).json({
        success: true,
        data: updateTeacher,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "can't update",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
};
const saveTeacherToUser = async (req, res) => {
  const { userId } = req.body;
  const user = await User.findById(userId);
  try {
    user.teacherData = [];
    const dataTeacher = await TeacherFindOne({ TeacherId: user.userId });
    await user.teacherData.push(dataTeacher);
    await user.save();
    return res.status(200).json({
      success: true,
      data: user.teacherData[0],
    });
  } catch (error) {
    console.log(error);
  }
};
const CreateTeacher = async (req, res) => {
  try {
    const data = req.body.data;
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (user) {
      if (user.roles == "teacher") {
        try {
          const { TeacherId } = data;
          const checkExit = await TeacherFindOne({ TeacherID: TeacherId });
          if (!checkExit) {
            const newTeacher = await TeacherCreateData(data);
            user.teacherData = newTeacher._id;
            await user.save();
            console.log("create Teacher success");
            return res.status(200).json({
              createSuccess: true,
              data: newTeacher.TeacherID,
            });
          } else {
            return res.status(404).json({
              createSuccess: false,
              error: "Teacher exit in database",
            });
          }
        } catch (err) {
          console.log(err);
          return res.status(500).json({
            createSuccess: false,
            error: err,
          });
        }
      } else {
        return res.status(500).json({
          createSuccess: false,
          error: "User is not Teacher role",
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

const TestStudentExit = async (teacher, student) => {
  const findstudent = await teacher.find((e) => e.StudentId == student);
  console.log(!findstudent);
  if (!findstudent) {
    return false;
  } else {
    return true;
  }
};

// input have 2 main value is student id(mean user id) and userId
const addStudentToList = async (req, res) => {
  try {
    const { userId, StudentId } = req.body;
    const user = await User.findById(userId);
    if (user) {
      try {
        const OjectTeacher = user.teacherData[0];
        const teacher1 = await TeacherFindbyID(OjectTeacher._id.toString());
        const Student1 = await StudentFindOne({ StudentId: StudentId });
        if (teacher1) {
          if (Student1) {
            const exitStudent = await TestStudentExit(
              teacher1.ListStudent,
              StudentId
            );
            if (exitStudent) {
              return res.status(500).json({
                success: false,
                error: "exit student in teacher",
              });
            } else {
              await teacher1.ListStudent.push(Student1);
              await teacher1.save();
              return res.status(200).json({
                success: true,
                data: user.teacherData[0],
              });
            }
          } else {
            return res.status(500).json({
              success: false,
              error: "can not find student",
            });
          }
        } else {
          return res.status(500).json({
            success: false,
            error: "can not find teacher",
          });
        }
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
// updateTeacher,saveTeacherToUser
module.exports = {
  CreateTeacher,
  UpdateStudentDataTeacher,
  updateTeacher,
  saveTeacherToUser,
  addStudentToList,
  GradingStudent,
};
