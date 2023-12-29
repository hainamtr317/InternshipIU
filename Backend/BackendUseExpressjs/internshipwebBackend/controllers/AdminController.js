const { model } = require('mongoose')

const User = require('../models/Usermodel')
const Teacher = require('../models/Teachermodel')
const Student = require('../models/studentModel')
const Announcement = require('../models/announmentsModel')
const {addAnnounce} = require('../models/announmentsModel')
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


    const getUserDataToManager = async(req,res)=>{

        try{
            const {userId} = req.body
            const user = await User.findById(userId)
            if (!user){
                return res.status(400).send({ error: 'User not found' });
            }else{
                let objecdUserdata
                if(user.roles =="student"){
                objecdUserdata = await StudentFindById(user.userData.toString())
                
                }
                else if (user.roles =="teacher"){
                objecdUserdata = await TeacherFindbyID(user.teacherData.toString())
                }
                else{
                    return res.status(400).json({ success:false,error: 'not that role' });
                }
                return res.status(200).json({success:true,UserData:objecdUserdata})
            }
        }catch(err){
            console.log(err)
            return res.status(400).json({success:false,error:err})
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

const  CreateAnnounce = async (req,res)=>{
    const {From,To,data}= req.body
    try {
        const userSend = await User.findOne({userId:From})
        const userReceive = await User.findOne({userId:To})
        if(userSend){
            if(userReceive){
                const mess = await addAnnounce(data)
                await userReceive.announcement.push(mess._id)
                await userReceive.save()
                return res.status(200).json({
                    success:true,
                    data:userReceive
                })
            }else{
                return res.status(500).json({
                    success:false,
                    mess:"userReive not found"
                })
            }
        }
        else{
            return res.status(500).json({
                success:false,
                mess:"userSend not found"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false
        })
    }

}

module.exports={SetTeacherandStudent,CreateAnnounce,getUserDataToManager}