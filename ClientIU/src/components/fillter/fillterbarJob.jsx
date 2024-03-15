import { Autocomplete, Box, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { Jobs, Company, fillerJobs, getJobsList } from "../../redux/jobsSlice";

function FillerJobs() {
  const jobsList = useSelector(Jobs);
  const dispatch = useDispatch();
  const CompanyData = useSelector(Company);
  const [CompanyList, SetCompanyList] = useState();
  const [Skill, SetSkill] = useState();
  const [Salary, SetSalary] = useState();
  const [BAreas, SetBAreasList] = useState();

  //   const [choseCompany, SetChoseCompany] = useState("");
  //   const [choseSkill, SetChoseSkill] = useState("");
  //   const [choseSalary, SetChoseSalary] = useState("");
  //   const [choseBAreas, SetChoseBAreas] = useState("");

  const HandleFiller = async () => {
    const choseBAreas = await document.getElementById("BAreas").value;
    const choseSkill = await document.getElementById("Skills").value;
    const choseSalary = await document.getElementById("Salary").value;
    const choseCompany = await document.getElementById("Company").value;
    if (choseBAreas != "") {
      const ListC = await CompanyData.filter(
        (data) => data.BussinessAreas == choseBAreas
      );
      const ListCname = await ListC.map((e) => e.company);
      const newListJobs = await jobsList.filter((job) =>
        ListCname.includes(job.company)
      );
      await dispatch(fillerJobs(newListJobs));
    } else if (choseCompany != "") {
      const newListJobs = await jobsList.filter(
        (job) => job.company == choseCompany
      );
      await dispatch(fillerJobs(newListJobs));
    } else if (choseSalary != "") {
      const newListJobs = await jobsList.filter(
        (job) => job.salary == choseSalary
      );
      await dispatch(fillerJobs(newListJobs));
    } else if (choseSkill != "") {
      const newListJobs = await jobsList.filter((job) =>
        job.SkillRequire.includes(choseSkill)
      );

      await dispatch(fillerJobs(newListJobs));
    } else {
      await dispatch(getJobsList());
    }
  };
  useEffect(() => {
    const handleData = async () => {
      const SkillHandle = await jobsList
        .map((e) => e.SkillRequire)
        .flat(Infinity);
      const BAreaArray = await CompanyData.map((e) => e.BussinessAreas);
      const SalaryArray = await jobsList.map((e) => e.salary);
      const BAreaSet = await new Set(BAreaArray);
      const SkillSet = await new Set(SkillHandle);
      const SalarySet = await new Set(SalaryArray);
      await SetCompanyList(CompanyData.map((e) => e.company));
      await SetSkill(Array.from(SkillSet));
      await SetSalary(Array.from(SalarySet));
      await SetBAreasList(Array.from(BAreaSet));
    };
    handleData();
  }, []);

  console.log(Skill);
  const AutoFiller = {
    width: 300,
    ml: "20px",
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: "30px",
          mb: "10px",
        }}
      >
        {/* filler follow companyName */}
        <Autocomplete
          disablePortal
          id="Company"
          options={CompanyList}
          sx={AutoFiller}
          renderInput={(params) => <TextField {...params} label="Company" />}
        ></Autocomplete>
        {/* filler follow skill */}
        <Autocomplete
          disablePortal
          id="Skills"
          options={Skill}
          sx={AutoFiller}
          renderInput={(params) => <TextField {...params} label="Skill" />}
        ></Autocomplete>
        {/* filler follow salary  */}
        <Autocomplete
          disablePortal
          id="Salary"
          options={Salary}
          sx={AutoFiller}
          renderInput={(params) => <TextField {...params} label="Salary" />}
        ></Autocomplete>
        {/* filler follow BAreas of company */}
        <Autocomplete
          disablePortal
          id="BAreas"
          options={BAreas}
          sx={AutoFiller}
          renderInput={(params) => (
            <TextField {...params} label="Business Areas" />
          )}
        ></Autocomplete>
        <IconButton onClick={HandleFiller} sx={{ ml: "30px" }}>
          <SearchIcon></SearchIcon>
        </IconButton>
      </Box>
    </Box>
  );
}
export default FillerJobs;
