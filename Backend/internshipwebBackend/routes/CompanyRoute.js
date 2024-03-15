const express = require("express");
const routers = express.Router();
const {
  createCompany,
  DeleteCompany,
  updateCompany,
  getCompanyList,
  getCompany,
  CompanyLogin,
  createListCompany,
  ReturnListJobsOfCompany,
  getCompanyId,
} = require("../controllers/CompanyController");

routers.route("/Company/getCompany").post(getCompany);
routers.route("/Company/getCompanyByID").post(getCompanyId);
routers.route("/Company/getListCompany").get(getCompanyList);
routers.route("/Company").post(createCompany);
routers.route("/Company/login").post(CompanyLogin);
routers.route("/Company/CreateListCompany").post(createListCompany);
routers.route("/Company").put(updateCompany);
routers.route("/Company").delete(DeleteCompany);
routers.route("/Company/ReturnListJobs").post(ReturnListJobsOfCompany);

module.exports = routers;
