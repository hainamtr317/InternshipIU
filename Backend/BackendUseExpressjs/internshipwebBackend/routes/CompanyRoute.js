const express = require("express")
const routers = express.Router()
const {createCompany,DeleteCompany,updateCompany,getCompanyList,getCompany,createListCompany} = require('../controllers/CompanyController')

routers.route("/Company/getCompany").post(getCompany)
routers.route("/Company/getListCompany").get(getCompanyList)
routers.route("/Company").post(createCompany)
routers.route("/Company/CreateListCompany").post(createListCompany)
routers.route("/Company").put(updateCompany)
routers.route("/Company").delete(DeleteCompany)

module.exports = routers;