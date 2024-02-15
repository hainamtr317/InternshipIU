const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { StudentSchema, StudentFindById } = require("./studentModel");
const { TeacherSchema, TeacherFindbyID } = require("./Teachermodel");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: String,
      required: true,
    },
    isLogin: {
      type: Boolean,
    },
    announcement: [{ type: mongoose.Types.ObjectId, ref: "announcement" }],
    userData: { type: mongoose.Types.ObjectId, ref: "student" },
    teacherData: { type: mongoose.Types.ObjectId, ref: "teacher" },
    ChatRoom: [
      {
        ChatId: { type: mongoose.Types.ObjectId, ref: "roomChat" },
        RoomName: String,
      },
    ],
    resetPasswordToken: String,
    session_token: String,
    confirmRegistrationExpire: Date,
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getSignedToken = async function () {
  let data;
  if (this.roles == "student") {
    const student = await StudentFindById(this.userData.toString());
    data = {
      userName: student.name,
      Major: student.major,
      AvatarImage: student.AvatarImage,
    };
  } else if (this.roles == "teacher") {
    const teacher = await TeacherFindbyID(this.teacherData.toString());
    data = {
      userName: teacher.name,
      Major: teacher.Department,
      AvatarImage: teacher.AvatarImage,
    };
  }

  const tokenJwt = jwt.sign(
    {
      userId: this._id,
      ChatTab: this.ChatRoom,
      userRole: this.roles,
      userData: data,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
  this.session_token = tokenJwt;

  return tokenJwt;
};

module.exports = mongoose.model("user", userSchema);
