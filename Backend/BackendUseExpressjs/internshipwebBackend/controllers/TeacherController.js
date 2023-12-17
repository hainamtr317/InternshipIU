const { model } = require('mongoose')

const User = require('../models/Usermodel')
const Teacher = require('../models/Teachermodel')
const {TeacherFindandUpdate,TeacherFindOne,TeacherCreateData} =require('../models/Teachermodel')

const updateTeacher = async (req,res)=>{
    try {
        const data =req.body.data
        const {userId}= req.body
        const user = await User.findById(userId)

        if(user){
                try {  
                    const dataTeacher = user.teacherData
                    const OjectTeacher = dataTeacher[0]
                        const updateTeacher = await TeacherFindandUpdate(OjectTeacher._id.toString(),data)
                        user.teacherData[0] = updateTeacher
                        await user.save()
                        return res.status(200).json({
                            success:true,
                            data:user.teacherData[0]})
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
const saveTeacherToUser = async(req,res)=>{
    const {userId}= req.body
    const user = await User.findById(userId)
    try {
        user.teacherData=[]
        const dataTeacher = await TeacherFindOne({TeacherId:user.userId})
        await user.teacherData.push(dataTeacher)
        await user.save()
        return res.status(200).json({
            success:true,
            data:user.teacherData[0]})
    } catch (error) {
        console.log(error)
    }
}
const CreateTeacher = async(req,res)=>{
    try {
        const data = req.body.data
        const {userId}= req.body
        const user = await User.findById(userId)
        if(user){
            if(user.roles == "teacher"){
                try {     
                    const {TeacherId} = data
                    const checkExit = await TeacherFindOne({TeacherID:TeacherId})
                    if(!checkExit){
                        const newTeacher = await TeacherCreateData(data)
                        user.teacherData = []
                        await user.save()
                        user.teacherData.push(newTeacher)
                        await user.save()
                        console.log("create Teacher success")
                        return res.status(200).json({
                            createSuccess:true
                        })
                    }
                    else{
                        return res.status(404).json({
                            createSuccess:false,
                            error:'Teacher exit in database'
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
                    error:'User is not Teacher role'
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
// updateTeacher,saveTeacherToUser
module.exports = {CreateTeacher,updateTeacher,saveTeacherToUser}