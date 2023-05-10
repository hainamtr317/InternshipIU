import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
function GridDataGradeTeacher(props) {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      description: "Id of Student",
    },
    {
      field: "studentName",
      width: 150,
      headerName: "Student Name",
      description: "Student information.",
    },
    { field: "email", width: 160, headerName: "Email" },
    {
      field: "phoneNumber",
      width: 120,
      headerName: "Phone Number",
      type: "number",
    },
    { field: "Instructor", width: 150, headerName: "Instructor" },
    { field: "Report", width: 150, headerName: "Report" },
    { field: "status", headerName: "Status" },
    { field: "date", headerName: "Date grading" },
    { field: "Fngrade", headerName: "Final grade" },
  ];

  return (
    <>
      <DataGrid columns={columns} rows={props.rowData} />
    </>
  );
}

export default GridDataGradeTeacher;
