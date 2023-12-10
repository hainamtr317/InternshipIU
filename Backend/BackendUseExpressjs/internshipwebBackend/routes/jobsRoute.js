const express = require("express")
const routers = express.Router()
const {createJob,DeleteJob,updateJob,getJobsList,getJob,createListJob} = require('../controllers/jobsController')

routers.route("/jobs/getJob").post(getJob)
routers.route("/jobs/getListJobs").get(getJobsList)
routers.route("/jobs").post(createJob)
routers.route("/jobs/createListJobs").post(createListJob)
routers.route("/jobs").put(updateJob)
routers.route("/jobs").delete(DeleteJob)

module.exports = routers;