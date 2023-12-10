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
    }
    ,report:String,
    grade:Number,
    status:String,
    Cv:String,

    
},{timestamps: true})
module.exports = mongoose.model('student',studentSchema)