const Company = require("../models/companymodel");
const { JobFind } = require("../models/jobsmodel");
const getCompanyList = async (req, res) => {
  try {
    const ListCompany = await Company.find({});
    console.log("display list Company");
    return res.status(200).json({ ListCompany });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
const getCompany = async (req, res) => {
  try {
    const { company } = req.body;
    const companyData = await Company.findOne({ company: company });
    if (!companyData) {
      return res.status(404).json({ error: "can not find company" });
    } else {
      console.log(companyData.company);
      return res.status(200).json({ companyData });
    }
  } catch (err) {
    console.log(err);
    return res.status(404).send(error);
  }
};
const getCompanyId = async (req, res) => {
  try {
    const { id } = req.body;
    const companyData = await Company.findById(id);
    if (!companyData) {
      return res.status(404).json({ error: "can not find company" });
    } else {
      console.log(companyData.company);
      return res.status(200).json({ companyData });
    }
  } catch (err) {
    console.log(err);
    return res.status(404).send(error);
  }
};
const CheckPass = (password, companyPass) => {
  if (password == companyPass) {
    return true;
  } else {
    return false;
  }
};
const CompanyLogin = async (req, res) => {
  try {
    const { emailCompany, password } = req.body;
    const companyData = await Company.findOne({ email: emailCompany });
    if (!companyData) {
      return res.status(404).json({ error: "can not find company" });
    } else {
      if (await CheckPass(password, companyData.password)) {
        console.log(companyData.company);
        return res
          .status(200)
          .json({
            CompanyID: companyData._id,
            CompanyName: companyData.company,
          });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).send(error);
  }
};

const updateCompany = async (req, res) => {
  try {
    const { id, updateData } = req.body;
    const com = await Company.findByIdAndUpdate(id, updateData);
    if (com) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ success: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: error });
  }
};

const DeleteCompany = () => {};
const ReturnListJobsOfCompany = async (req, res) => {
  try {
    const { id } = req.body;
    const com = await Company.findById(id);
    if (com) {
      const JobListID = await com.JobList.map((job) => job.JobId);
      const JobList = await JobFind({ _id: { $in: JobListID } });
      return res.status(200).json({ success: true, jobList: JobList });
    } else {
      return res.status(400).json({ success: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: error });
  }
};

const createListCompany = async (req, res) => {
  const data = req.body;
  const arrayData = data.CompanyList;
  try {
    await arrayData.map(async (CompanyData, index) => {
      try {
        const { company } = CompanyData;
        const checkExit = await Company.findOne({ company: company });
        if (!checkExit) {
          const newCompany = await Company(CompanyData);
          const companySave = await newCompany.save();
          console.log(`create Company ${index} success`);
        } else {
          console.log(
            `can not create Company ${index} because exit Company in db`
          );
        }
      } catch (error) {
        console.log(error);
      }
    });
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).send("not success");
  }
};
const createCompany = async (req, res) => {
  try {
    const data = req.body;
    const { company } = req.body;
    const checkExit = await Company.findOne({
      company: company,
    });
    if (!checkExit) {
      const newCompany = await Company(data);
      const com = await newCompany.save();
      return res.status(200).json({
        createSuccess: true,
      });
    } else {
      return res.status(404).json({
        createSuccess: false,
        error: "Company exit in database",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
};
module.exports = {
  createCompany,
  DeleteCompany,
  updateCompany,
  getCompanyList,
  getCompany,
  createListCompany,
  CompanyLogin,
  ReturnListJobsOfCompany,
  getCompanyId,
};
