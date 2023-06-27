import * as React from "react";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
function GriddataUser(props) {
const displaybutton =()=> {
    return (
        <strong>
          <Button variant="contained" size="small" style={{ marginLeft: 16 }}>
            Open
          </Button>
        </strong>
    )
}
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      description: "Id of Student",
    },
    {
      field: "Name",
      width: 150,
      headerName: "User Name",
      description: "User information.",
    },
    { field: "email", width: 160, headerName: "Email" },
    { field: "password", width: 150, headerName: "Password" },
    {
      field: "phoneNumber",
      width: 120,
      headerName: "Phone Number",
      type: "number",
    },
    { field: "Role", width: 150, headerName: "Role" },
    {
      field: "Manager",
      width: 150,
      headerName: "Manager",
      renderCell: displaybutton
        
    },
  ];

  return (
    <>
      <DataGrid columns={columns} rows={props.rowData} />
    </>
  );
}

export default GriddataUser;
