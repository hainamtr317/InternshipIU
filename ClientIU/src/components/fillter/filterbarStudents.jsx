import { Autocomplete, Box, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  student,
  filterStudents,
  GetStudentsList,
} from "../../redux/StudentSlice";
function FilterStudents() {
  const dispatch = useDispatch();
  const dataUser = useSelector(student);
  const [CompanyList, SetCompanyList] = useState();
  const Status = ["Apply", "Register", "Internship", "Report", "Grading"];
  const HandleFiller = async () => {
    const choseStatus = await document.getElementById("Status").value;
    const choseCompany = await document.getElementById("Company").value;
    if (choseStatus != "") {
      const newListStudents = await dataUser.filter(
        (student) => Status[student.progressionStatus] == choseStatus
      );
      await dispatch(filterStudents(newListStudents));
    } else {
      await dispatch(GetStudentsList());
    }
    if (choseCompany != "") {
      const newListStudent = await dataUser.filter(
        (student) => student.job.Company == choseCompany
      );
      await dispatch(filterStudents(newListStudent));
    } else {
      await dispatch(GetStudentsList());
    }
  };
  useEffect(() => {
    const handleData = async () => {
      const jobOfStudent = await dataUser.map((e) => e.job);
      const filterListCompany = await jobOfStudent.filter((job) =>
        job.hasOwnProperty("JobName")
      );
      await SetCompanyList(filterListCompany.map((e) => e.Company));
    };
    handleData();
  }, []);
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
          id="Status"
          options={Status}
          sx={AutoFiller}
          renderInput={(params) => <TextField {...params} label="Status" />}
        ></Autocomplete>

        <IconButton onClick={HandleFiller} sx={{ ml: "30px" }}>
          <SearchIcon></SearchIcon>
        </IconButton>
      </Box>
    </Box>
  );
}
export default FilterStudents;
