const User = require('../models/Usermodel')


const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
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
// check admin role before create new user
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
            sendToken(user,200,res)
        }
    }  

}catch(err){
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
    console.log("register new user")
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

module.exports = {getUsers,userLogin,userRegister,forgotPassword}