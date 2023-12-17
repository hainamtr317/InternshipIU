const Jobs = require('../models/jobsmodel')
const {JobFind,JobFindById,JobFindAndUpdate,JobFindOne} = require('../models/jobsmodel')
const getJobsList = async (req,res)=>{
    try {
    const ListJobs = await JobFind({})
    console.log("display list jobs")
    return res.status(200).json({ListJobs})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error})
    }
    
}
const getJob= async (req,res)=>{
    try{
        const {id} = req.body
        const job = await Jobs.JobFindById(id)
        if(!job){
            return res.status(404).json({error:"can not find user"})
        }
        else{
            console.log("find job")
            return res.status(200).json({job})
        }
    }catch(err){
        console.log(err)
        return res.status(404).send(error)
    }
    
}

const updateJob= async (req,res)=>{
    try {
        const {id,updateData}= req.body
        const job = await Jobs.JobFindAndUpdate(id,updateData)
        console.log('update success:',job.nameJob)
        return res.status(200).json({updateSuccess:true})
    } catch (error) {
        return res.status(500).json({err:error})
    }
}

const DeleteJob= ()=>{
    
}
const createListJob = async (req,res) => {
    const data = req.body
    const arrayData = data.jobs
    try {
        await arrayData.map(async(jobData,index)=>{
            try {
                const {nameJob,company} = jobData
                const checkExit = await Jobs.JobFindOne({nameJob:nameJob,company:company})
                if(!checkExit){
                    const newJob = await Jobs(jobData)
                    const job = await newJob.save()
                    console.log(`create job ${index} success`)
                }
                else{
                    console.log(`can not create job ${index} because exit job in db`)
                } 
            } catch (error) {
                console.log(error)
            }
        })
        return res.status(200).json({
            success:true
        })
    } catch (error) {
        return res.status(500).send("not success")
    }

}
const createJob= async(req,res)=>{
    try {
        const data = req.body
        const {nameJob,company} = req.body   
        const checkExit = await Jobs.JobFindOne({nameJob:nameJob,company:company})
        if(!checkExit){
            const newJob = await Jobs(data)
            const job = await newJob.save()
            return res.status(200).json({
                createSuccess:true
            })
        }
        else{
            return res.status(404).json({
                createSuccess:false,
                error:'job exit in database'
            })
        } 
    } catch (error) {
        return res.status(404).send(error)
    }
    
}
module.exports = {createJob,DeleteJob,updateJob,getJobsList,getJob,createListJob}