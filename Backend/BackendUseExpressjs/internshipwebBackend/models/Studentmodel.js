const mongoose = require('mongoose')
const {CvSchema} = require('./Cvmodel')
const {jobsSchema} = require("./jobsmodel")
const {announcementSchema} = require('./announmentsModel')

const StudentSchema = new mongoose.Schema({
    StudentId:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required: true 
    }
    ,
    major:{
        type:String,
        required:true
    },
    Department:{
        type:String,
        required:true
    },
    phone:String,
    AvatarImage:String,
    email:{
        type:String,
        required:true
    },
    teacher:{
        teacherID:{type:mongoose.Schema.Types.ObjectId,ref:'teacher'},
        teacherName:String,
        teacherPhone:Number,
        teacherEmail:String
    }
    ,
    report:String,
    grade:{
        Grade:Number,
        Comment:String,
    },
    progressionStatus:Number,
    instructor:{
        name:String,
        phone:String,
        email:String,
        Position:String
    },
    job:{
        JobName:String,
        Address:String,
        Company:String,
        TypeofCompany:String
    },
    announcement:[{ type: mongoose.Types.ObjectId, ref: "announcement"}],
    mainCV:{type:String},
    Cv:[{ type: mongoose.Types.ObjectId, ref: "Cv"}],
    JobsApplied:[jobsSchema]

    
},{timestamps: true})

const StudentFindandUpdate=async(id,data)=>{
    try {
        const updateStudent = await Student.findByIdAndUpdate(id,data)
        await updateStudent.save()
        return updateStudent
    } catch (error) {
        return error
    }
}
const StudentFindOne=async(data)=>{
    try {
        const student1 = await Student.findOne(data)
        return student1
    } catch (error) {
        return error
    }
}
const StudentCreateData =async(data)=>{
    try {
        const student1 = await Student(data)
        await student1.save()
        return student1
    } catch (error) {
        return error
    }
}
const StudentFindById =async(data)=>{
    try {
        const student1 = await Student.findById(data)
        return student1
    } catch (error) {
        return error
    }
}
const Student =  mongoose.model('student',StudentSchema)
module.exports = Student
module.exports = {StudentSchema,StudentFindById,StudentFindandUpdate,StudentFindOne,StudentCreateData}