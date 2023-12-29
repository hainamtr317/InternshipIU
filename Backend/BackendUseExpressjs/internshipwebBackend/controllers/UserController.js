const User = require('../models/Usermodel')
const jwt = require("jsonwebtoken");
const { StudentFindById } = require('../models/studentModel');
const { TeacherFindbyID } = require('../models/Teachermodel');
const {annouceFindbyId} = require('../models/announmentsModel')
const sendToken = async (user, statusCode, res) => {
    const token = await user.getSignedToken();
    res.status(statusCode).json({ success: true,userRole:user.roles, token });
  };

//@desc Get all users
//@route GET /api/contacts
//@access public

const getUsers = async(req,res)=>{

    try{
        const user = await User.find({})
        if (!user){
            return res.status(400).send({ error: 'User not found' });
    
        }else{
            return res.status(200).send({user})
        }
    }catch(err){
        return res.status(400).send({error:err})
    }

}
//@desc Get all users
//@route GET /api/contacts
//@access private
//@ just create by admin

const userLogin = async(req,res)=>{
const {userId,password} = req.body
if (!userId||!password){
    return res.send("error")
}
try{
    const user = await User.findOne({userId}).select("+password");
    if (!user){
        return res.status(400).send({ error: 'User not found' });
    }else{
        const matchPass = await user.matchPasswords(password)
        if(!matchPass){
            return res.status(400).send({error:matchPass});
        }else{
            user.isLogin=true
            await user.save();
            console.log("userLogin",user.userId)
            sendToken(user,200,res)
        }
    }  

}catch(err){
    console.log(err)
    return res.send(err)
}

}
//@desc Get all users
//@route GET /api/contacts
//@access public
const userRegister = async(req,res)=>{
    const { userId, password ,roles} = req.body;
    if (!userId || !password) {
        return res.status(400).send({ error: 'Missing userId or password' });
    }
    try{
    const user = await User.findOne({userId}).select("+password");
    if (!user){
    const user = await User.create({ userId, password,roles,isLogin:false });
    // const confirmedToken = user.getConfirmedToken();
    await user.save();
    console.log("register new user",user.userId)
    res.status(200).json({
        success: true
    });
    }else{
        return res.status(400).json({
            success: false,error:'user exit'
        });
    }

    }catch(err){
    return res.status(401).send({error:err})
}

}
//@desc Get all users
//@route GET /api/contacts
//@access public
const forgotPassword = async (req,res)=>{
    const {userId} = req.body
    try{
        const user = await User.findOne({userId})
        if(!user){
            return res.status(400).send({error:"can not find user"})
        }else{
            // return new password default is 1234567
            user.password = "1234567"
            await user.save();
            return res.status(201).send({password:"change success"})
        }
    }catch(err){
        return res.status(400).send({error:err})
    }
} 
const getUserData = async(req,res)=>{

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
                return res.status(400).send({ error: 'not that role' });
            }
            return res.status(200).json({UserData:objecdUserdata})
        }
    }catch(err){
        console.log(err)
        return res.status(400).json({error:err})
    }

}
const CheckLogged = async(req,res)=>{
    let token
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return res.status(401).json({success:false,err:"Not authorized to access this route"})
    }
    console.log(token)
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decode)
       try {
        const user = await User.findById(decode.userId);
        if (!user) {
        return res.status(404).json({success:false,err:"No user found with this id"}) 
        }
        else{
        return res.status(200).json({success:true,data:decode})
       }
        } catch (error) {
        console.log(error)
       }
    } catch (error) {
        return res.status(401).json({success:false,err:"Not authorize to access this route"})
    }
}

const getAnnounce = async(req,res)=>{
    try {
        const {userId} = req.body
        const userData = await User.findById(userId)
        if(userData){
            if(userData.announcement.length>0){
                await Promise.all(userData.announcement.map(async (e)=>{
                    const annouce = await annouceFindbyId(e.toString())
                    if(annouce){
                        return annouce
                    }
                    else{
                        return "no value"
                    } 
                })).then(async(value)=>{
                    console.log(value)
                    return res.status(200).json({
                        success:true,
                        data:value
                    })
                })
            }
            else{
                return res.status(200).json({
                    success:true,
                    data:userData.announcement
                })
            }
            
        }
    } catch (error) {
        const err = error
        return res.status(404).json({
            success:false,
            error:err
        })
    }
}

module.exports = {getUsers,userLogin,userRegister,forgotPassword,getAnnounce,getUserData,CheckLogged}