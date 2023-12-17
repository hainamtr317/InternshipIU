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

Jobs = mongoose.model('jobs',jobsSchema)
module.exports = Jobs

const JobFind =async(data)=>{
    try {
        const ListJobs = await Jobs.find(data)
        return ListJobs
    } catch (error) {
        console.log(error)
    }

}
const JobFindById =async(data)=>{
    try {
        const job = await Jobs.findById(data)
        return job
    } catch (error) {
        console.log(error)
    }

}
const JobFindAndUpdate =async(id,updateData)=>{
    try {
        const job = await Jobs.findByIdAndUpdate(id,updateData)
        return job
    } catch (error) {
        console.log(error)
    }

}
const JobFindOne =async(data)=>{
    try {
        const checkExit = await Jobs.findOne(data)
        return checkExit
    } catch (error) {
        console.log(error)
    }

}


module.exports = {jobsSchema,JobFind,JobFindById,JobFindAndUpdate,JobFindOne}