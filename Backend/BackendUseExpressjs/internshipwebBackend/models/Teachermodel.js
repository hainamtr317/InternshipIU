const mongoose = require('mongoose')
const {StudentSchema} = require('./studentModel')
const TeacherSchema = new mongoose.Schema({
    TeacherID:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required: true 
    }
    ,
    Department:String,
    phone:String,
    email:{
        type:String,
        required:true
    }
    ,
    AvatarImage:String,
    ListStudent:[StudentSchema]

    
},{timestamps: true})
const TeacherFindandUpdate=async(id,data)=>{
    try {
        const updateTeacher = await Teacher.findByIdAndUpdate(id,data)
        await updateTeacher.save()
        return updateTeacher
    } catch (error) {
        return error
    }
}
const TeacherFindOne=async(data)=>{
    try {
        const Teacher1 = await Teacher.findOne(data)
        return Teacher1
    } catch (error) {
        return error
    }
}
const TeacherCreateData =async(data)=>{
    try {
        const Teacher1 = await Teacher(data)
        await Teacher1.save()
        return Teacher1
    } catch (error) {
        return error
    }
}
const TeacherFindbyID = async(data)=>{
    try {
        const Teacher1 = await Teacher.findById(data)
        return Teacher1
    } catch (error) {
        return error
    }
}
const Teacher =  mongoose.model('teacher',TeacherSchema)
module.exports = Teacher
module.exports = {TeacherSchema,TeacherFindandUpdate,TeacherFindbyID,TeacherFindOne,TeacherCreateData}