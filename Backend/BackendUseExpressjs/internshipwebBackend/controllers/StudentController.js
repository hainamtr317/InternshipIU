const { model } = require('mongoose')

const User = require('../models/Usermodel')
const Student = require('../models/studentModel')
const {StudentFindandUpdate,StudentFindOne,StudentCreateData} =require('../models/studentModel')

const updateStudent = async (req,res)=>{
    try {
        const data =req.body.data
        const {userId}= req.body
        const user = await User.findById(userId)

        if(user){
                try {  
                    const dataStudent = user.userData
                    const OjectStudent = dataStudent[0]
                        const updateStudent = await StudentFindandUpdate(OjectStudent._id.toString(),data)
                        user.userData[0] = updateStudent
                        await user.save()
                        return res.status(200).json({
                            success:true,
                            data:user.userData[0]})
                } catch (err) {
                    console.log(err)
                    return res.status(500).json({
                        success:false,
                        error:err
                    })
                }
            
        }
        else{
            return res.status(500).json({
                success:false,
                error:'can not fin user in database'
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error
        })
    }
}
const getStudent =async(req,res)=>{
    const {StudentId}= req.body
    console.log(StudentId)
    try {
        const stu = await StudentFindOne({StudentId:StudentId})
        if(stu){
            console.log(stu)
            return res.status(200).json({
                success:true,
                data:stu
            })
        }
        else{
            console.log("can't fin student")
            return res.status(500).json({
                success:false,
                error:"can't find student"
            })
        }
    } catch (error) {
        const err = error
        console.log(err)
        return res.status(500).json({
            success:false,
            error:err
        })
    }
}
const saveStudentToUser = async(req,res)=>{
    const {userId}= req.body
    const user = await User.findById(userId)
    try {
        user.userData=[]
        const dataStudent = await StudentFindOne({StudentId:user.userId})
        await user.userData.push(dataStudent)
        await user.save()
        return res.status(200).json({
            success:true,
            data:user.userData[0]})
    } catch (error) {
        console.log(error)
    }
}
const CreateStudent = async(req,res)=>{
    try {
        const data = req.body.data
        const {userId}= req.body
        const user = await User.findById(userId)
        if(user){
            if(user.roles == "student"){
                try {     
                    const {StudentId} = data
                    const checkExit = await StudentFindOne({StudentId:StudentId})
                    if(!checkExit){
                        const newStudent = await StudentCreateData(data)
                        user.userData = []
                        await user.save()
                        user.userData.push(newStudent)
                        await user.save()
                        console.log("update Student and user success")
                        return res.status(200).json({
                            createSuccess:true
                        })
                    }
                    else{
                        return res.status(404).json({
                            createSuccess:false,
                            error:'Student exit in database'
                        })
                    }
                } catch (err) {
                    console.log(err)
                    return res.status(500).json({
                        createSuccess:false,
                        error:err
                    })
                }
            }
            else{
                return res.status(500).json({
                    createSuccess:false,
                    error:'User is not student role'
                })
            }
        }
        else{
            return res.status(500).json({
                createSuccess:false,
                error:'can not fin user in database'
            })
        }
        
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            createSuccess:false,
            error:err
        })
    }
    
}
module.exports = {CreateStudent,updateStudent,saveStudentToUser,getStudent}