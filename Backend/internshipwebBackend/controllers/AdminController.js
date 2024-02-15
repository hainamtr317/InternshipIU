const { model } = require("mongoose");

const User = require("../models/Usermodel");
const Teacher = require("../models/Teachermodel");
const {
  JobFind,
  JobFindById,
  JobFindAndUpdate,
  JobFindOne,
} = require("../models/jobsmodel");
const Company = require("../models/companymodel");
const {
  StudentFindandUpdate,
  StudentFindById,
  StudentFindOne,
  StudentCreateData,
  StudentGetall,
} = require("../models/studentModel");
const Announcement = require("../models/announmentsModel");
const { addAnnounce } = require("../models/announmentsModel");
const {
  TeacherFindandUpdate,
  TeacherFindbyID,
  TeacherFindOne,
  TeacherCreateData,
} = require("../models/Teachermodel");

const { updateCompany } = require("./CompanyController");
const axios = require("axios");

const Axios = axios.create({
  baseURL: "http://localhost:7789",
  headers: {
    "Content-Type": "application/json",
  },
});
const TestStudentExit = async (teacher, student) => {
  const findstudent = await teacher.find((e) => e.StudentId == student);
  if (findstudent == undefined) {
    return false;
  } else {
    return true;
  }
};

const getUserDataToManager = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).send({ error: "User not found" });
    } else {
      let objecdUserdata;
      if (user.roles == "student") {
        objecdUserdata = await StudentFindById(user.userData.toString());
      } else if (user.roles == "teacher") {
        objecdUserdata = await TeacherFindbyID(user.teacherData.toString());
      } else {
        return res.status(400).json({ success: false, error: "not that role" });
      }
      return res.status(200).json({ success: true, UserData: objecdUserdata });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, error: err });
  }
};
// const updateStudent = await StudentFindandUpdate(Student1._id, {
//     teacher: {
//       teacherID: teacher1._id,
//       teacherName: teacher1.name,
//       teacherPhone: teacher1.phone,
//       teacherEmail: teacher1.email,
//     },
//   });
const CreateNewChat = async (TeacherId, StudentId) => {
  try {
    const userTeacher = await User.findOne({ userId: TeacherId });
    const userStudent = await User.findOne({ userId: StudentId });
    const roomName = TeacherId + StudentId;

    await Axios.post("/api/users/addRoom", {
      UserList: [userTeacher._id.toString(), userStudent._id.toString()],
      RoomName: roomName,
    });
    console.log("create success");
    return true;
  } catch (error) {
    console.log(error);
    return error.toString();
  }
};
const DeleteChat = async (TeacherId, StudentId) => {
  try {
    const userTeacher = await User.findOne({ userId: TeacherId });
    const userStudent = await User.findOne({ userId: StudentId });
    const roomName = TeacherId + StudentId;
    await Axios.post("/api/users/deleteRoom", {
      UserList: [userTeacher._id.toString(), userStudent._id.toString()],
      RoomName: roomName,
    });
    console.log("delete success");
    return true;
  } catch (error) {
    console.log(error);
    return error.toString();
  }
};

const SetTeacherandStudent = async (req, res) => {
  const { TeacherId, StudentListID } = req.body;
  try {
    const teacher1 = await TeacherFindOne({ TeacherID: TeacherId });
    if (teacher1) {
      try {
        if (teacher1.ListStudent.length > 0) {
          await Promise.all(
            teacher1.ListStudent.map(async (studentValue) => {
              const FindStudent = await StudentListID.find(
                (e) => e == studentValue.StudentId
              );
              if (FindStudent == undefined) {
                await StudentFindandUpdate(studentValue._id, {
                  teacher: {},
                }).then(async (data) => {
                  await DeleteChat(TeacherId, data.StudentId);
                  return true;
                });
              }
            })
          ).then(async () => {
            await Promise.all(
              StudentListID.map(async (e) => {
                const StudentToSet = await StudentFindOne({ StudentId: e });
                const Student1 = await StudentFindandUpdate(StudentToSet, {
                  teacher: {
                    teacherID: teacher1._id,
                    teacherName: teacher1.name,
                    teacherPhone: teacher1.phone,
                    teacherEmail: teacher1.email,
                  },
                });
                await CreateNewChat(TeacherId, e);
                return Student1;
              })
            ).then(async (value) => {
              teacher1.ListStudent = value;
              await teacher1.save();
              return res.status(200).json({
                success: true,
                data: teacher1,
              });
            });
          });
        } else {
          await Promise.all(
            StudentListID.map(async (e) => {
              const StudentToSet = await StudentFindOne({ StudentId: e });
              const Student1 = await StudentFindandUpdate(StudentToSet, {
                teacher: {
                  teacherID: teacher1._id,
                  teacherName: teacher1.name,
                  teacherPhone: teacher1.phone,
                  teacherEmail: teacher1.email,
                },
              });
              return Student1;
            })
          ).then(async (value) => {
            teacher1.ListStudent = value;
            await teacher1.save();
            return res.status(200).json({
              success: true,
              data: teacher1,
            });
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return res.status(500).json({
        success: false,
        error: "can not find teacher in database",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

const CreateAnnounce = async (req, res) => {
  const { From, To, contentAnnounce } = req.body;
  try {
    const userSend = await User.findById(From);
    const userReceive = await User.findOne({ userId: To });
    if (userSend) {
      if (userReceive) {
        const mess = await addAnnounce({
          whoSend: userSend.userId,
          announcementContent: contentAnnounce,
          ReadStatus: false,
          announcementLink: "",
        });
        await userReceive.announcement.push(mess._id);
        await userReceive.save();
        return res.status(200).json({
          success: true,
          data: userReceive,
        });
      } else {
        return res.status(500).json({
          success: false,
          mess: "userReive not found",
        });
      }
    } else {
      return res.status(500).json({
        success: false,
        mess: "userSend not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
    });
  }
};
const CreateAnnounceForStudent = async (req, res) => {
  const { From, To, contentAnnounce } = req.body;
  try {
    const userSend = await User.findById(From);
    const teacherReceive = await TeacherFindbyID(To);
    const userReceive = await User.findOne({
      userId: teacherReceive.TeacherID,
    });
    if (userSend) {
      if (userReceive) {
        const mess = await addAnnounce({
          whoSend: userSend.userId,
          announcementContent: contentAnnounce,
          ReadStatus: false,
          announcementLink: "",
        });
        await userReceive.announcement.push(mess._id);
        await userReceive.save();
        return res.status(200).json({
          success: true,
          data: userReceive,
        });
      } else {
        console.log("userReive not found");
        return res.status(500).json({
          success: false,
          mess: "userReive not found",
        });
      }
    } else {
      return res.status(500).json({
        success: false,
        mess: "userSend not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
    });
  }
};
const getStudentList = async (req, res) => {
  try {
    const Student1 = await StudentGetall();
    await Promise.all(
      Student1.map((e) => {
        return { ID: e.StudentId, teacherName: e.teacher.teacherName };
      })
    ).then((value) => {
      console.log(value);
      return res.status(200).json({
        success: true,
        data: value,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
    });
  }
};
const adminUpdateStudent = async (req, res) => {
  try {
    const { StudentID, data } = req.body;
    const updateStudent = await StudentFindandUpdate(StudentID, data);
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
};
const autoHandleJobAndCompany = async (req, res) => {
  try {
    const JobList = await JobFind({});
    if (JobList) {
      await Promise.all(
        JobList.map(async (e) => {
          const company1 = await Company.findOne({ company: e.company });
          if (company1) {
            const updateJob = await JobFindAndUpdate(e._id, {
              companyRef: [company1._id],
            });
            const companyUpdate = await Company.findByIdAndUpdate(
              company1._id,
              {
                JobList: [
                  ...company1.JobList,
                  {
                    JobId: e._id,
                    JobName: e.nameJob,
                  },
                ],
              }
            );

            console.log(
              "update success",
              updateJob.nameJob,
              updateCompany.company
            );
            return true;
          } else {
            return false;
          }
        })
      ).then((value) => {
        return res.status(200).json({
          success: true,
          data: value,
        });
      });
    } else {
      return res.status(500).json({
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
    });
  }
};

module.exports = {
  SetTeacherandStudent,
  CreateAnnounce,
  getUserDataToManager,
  getStudentList,
  adminUpdateStudent,
  autoHandleJobAndCompany,
  CreateAnnounceForStudent,
};
