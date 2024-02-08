const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

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
    ChatRoom: [{ type: mongoose.Types.ObjectId, ref: "roomChat" }],
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

module.exports = mongoose.model("user", userSchema);
