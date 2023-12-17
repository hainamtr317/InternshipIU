const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {StudentSchema} = require('./studentModel')
const {TeacherSchema} = require("./Teachermodel")
const userSchema = new mongoose.Schema({
    userId:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true 
    }
    ,
    roles:{
        type:String,
        required:true
    }
    ,
    isLogin:{
        type: Boolean
    },
    userData:[StudentSchema],
    teacherData:[TeacherSchema],
    resetPasswordToken: String,
    session_token: String,
    confirmRegistrationExpire: Date,
    
},{timestamps: true})
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

userSchema.methods.getSignedToken = function () {
let data
    if(this.roles =="student"){
    data = {
        userName:this.userData[0].name,
        Major:this.userData[0].major,
        AvatarImage:this.userData[0].AvatarImage
    }
} else if (this.roles =="teacher"){
    data = {
        userName:this.teacherData[0].name,
        Major:this.teacherData[0].Department,
        AvatarImage:this.teacherData[0].AvatarImage
    }
}
const tokenJwt = jwt.sign({ userId:this._id,userRole:this.roles,userData:data}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
});
this.session_token = tokenJwt

    return tokenJwt
};


module.exports = mongoose.model('user',userSchema)