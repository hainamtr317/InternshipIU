const { model } = require('mongoose')

const User = require('../models/Usermodel')
const Teacher = require('../models/Teachermodel')
const Student = require('../models/studentModel')
const {TeacherFindandUpdate,TeacherFindbyID,TeacherFindOne,TeacherCreateData} =require('../models/Teachermodel')
const {StudentFindandUpdate,StudentFindById,StudentFindOne,StudentCreateData}= require('../models/studentModel')

const TestStudentExit =async (teacher,student)=>{
    const findstudent = await teacher.find(e=> e.StudentId == student)
    if(findstudent==undefined){
        return false
    }else{
        return true
    }
    }

const SetTeacherandStudent = async (req,res)=>{
    const {TeacherId,StudentListID}= req.body
    try {
        const teacher1 = await TeacherFindOne({TeacherID:TeacherId})
        if(teacher1){
            try {
            await Promise.all(StudentListID.map(async (e)=>{
            const Student1 = await StudentFindOne({StudentId:e})    
            if(Student1){
                const updateStudent = await StudentFindandUpdate(Student1._id,{
                    teacher:{
                        teacherID: teacher1._id,
                        teacherName:teacher1.name,
                        teacherPhone:teacher1.phone,
                        teacherEmail:teacher1.email
                    }
                })
                const exitStudent = await TestStudentExit(teacher1.ListStudent,e)
                if(!exitStudent){
                    return Student1
                }
                else{
                    const findstudent = await teacher1.ListStudent.find(Element=> Element.StudentId == Student1.StudentId)
                    console.log("exit Student",findstudent.StudentId)
                    return findstudent
                }
            }
            
            else{
                return res.status(500).json({
                    success:false,
                    error:'can not find student'
                })
            }
            })).then(async(value)=>{
                teacher1.ListStudent = value
                await teacher1.save()
            })
            return res.status(200).json({
                success:true,
                data:teacher1})
            } catch (error) {
                console.log(error)
            }
        }
        else{
            return res.status(500).json({
                success:false,
                error:'can not find teacher in database'
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error
        })
    }
}

module.exports={SetTeacherandStudent}