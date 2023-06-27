import * as React from "react";
import { Button, Card, CardMedia } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
function GriddataCompany(props) {
function Rederimage( props ){
    const { hasFocus, value } = props;
    return (
    <Card>
        <CardMedia
        component="img"
        height="80%"
        width="80%"
        src={value}
        >
        </CardMedia>
    </Card>
    )
}
  const columns = [
    { field: "company",width:200,headerName: "Company Name" },
    { field: "image",width:150,  headerName: "Image", renderCell: Rederimage },
    { field: "Address",width:200, headerName: "Address"},
    { field: "Website",width:150,  headerName: "URL" },
    { field: "CompanySize",  headerName: "Company Size" },
    { field: "BussinessAreas",  headerName: "Bussiness Areas" },
    { field: "Decripsion",  headerName: "Decripsion" },
    { field: "office",  headerName: "office" },
    { field: "Joblist",  headerName: "Joblist" },
  ];

  return (
    <>
      <DataGrid getRowHeight={() => 'auto'} columns={columns} rows={props.rowData} />
    </>
  );
}

export default GriddataCompany;
