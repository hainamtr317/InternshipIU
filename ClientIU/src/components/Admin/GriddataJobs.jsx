import * as React from "react";
import { Button, Card, CardMedia } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
function  GriddataJobs(props) {
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
    { field: "nameJob",width:200,headerName: "Job Name" },
    { field: "company",width:150,  headerName: "company" },
    { field: "image",width:150,  headerName: "Image", renderCell: Rederimage },
    { field: "salary",  headerName: "salary" },
    { field: "Address",width:200, headerName: "Address"},
    { field: "update",  headerName: "update" },
  ];

  return (
    <>
      <DataGrid getRowHeight={() => 'auto'} columns={columns} rows={props.rowData} />
    </>
  );
}

export default GriddataJobs;
