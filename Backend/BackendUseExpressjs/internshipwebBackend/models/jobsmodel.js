const mongoose = require('mongoose')
const jobsSchema = new mongoose.Schema({
    nameJob:{
        type: String,
        required: true 
    }
    ,
    company:{
        type:String,
        required:true
    }
    ,
    image:{
        type:String,
        required:true},
    salary:{
        type:String
    },
    Address:{
        type:String
    },
    Description:String,
    companyRef:[{type:mongoose.Schema.Types.ObjectId,ref:'jobs'}],
    SkillRequire:[],


    
},{timestamps:  {createdAt: 'created_at', updated: 'updated_at'}})
module.exports = mongoose.model('jobs',jobsSchema)