const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    StudentId:{
        type: String,
        required:true
    },
    studentName:{
        type: String,
        required: true 
    }
    ,
    major:{
        type:String,
        required:true
    },
    image:String,
    report:String,
    grade:Number,
    activity:String,
    progression:Number,
    email:String,
    phone:Number,
    teacher:String,
    instructor:String,
    announcement:String,
    Cv:String,

    
},{timestamps: true})
module.exports = mongoose.model('student',studentSchema)