const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
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
const tokenJwt = jwt.sign({ id: this._id,userId:this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
});
this.session_token = tokenJwt

    return tokenJwt
};


module.exports = mongoose.model('user',userSchema)