import { Button, Card, CardMedia, Box, Typography } from "@mui/material";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";

import Axios from "../../config/axiosConfig";
import ModalCreateCompany from "./components/CreateCompanyModal";

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
  const [OpenReg, setOpenReg] = React.useState(false);
  const handleOpenReg = () => setOpenReg(true);
  const handleCloseReg = () => setOpenReg(false);

  const handleClick = () => {
    handleOpenReg();
  };

  return (
    <>
      <GridToolbarContainer>
        <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
          Add Company
        </Button>
      </GridToolbarContainer>
      <ModalCreateCompany
        Open={OpenReg}
        Close={handleCloseReg}
      ></ModalCreateCompany>
    </>
  );
}

function GridDataCompany({ rowData }) {
  const [rows, setRows] = React.useState(rowData);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    if (confirm("Do you want change this Company Information?")) {
      const updatedRow = { ...newRow, isNew: false };

      try {
        const dataCompanyUpdate = {
          company: newRow.company,
          image: newRow.image,
          email: newRow.email,
          Address: newRow.Address,
          Website: newRow.Website,
          CompanySize: newRow.CompanySize,
          BussinessAreas: newRow.BussinessAreas,
          Decripsion: newRow.Decripsion,
          office: newRow.office,
        };

        await Axios.put("/api/Company", {
          id: newRow.id,
          updateData: dataCompanyUpdate,
        }).then(async (res) => {
          if (res.data.success) {
            alert("Success update Company", newRow.company);
            location.reload(true);
          } else {
            alert("have error ");
            location.reload(true);
          }
        });
      } catch (error) {
        console.log(error);
        alert("have error :", error);
      }
      setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
      return updatedRow;
    } else {
      alert("nothing change");
      location.reload(true);
    }
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  function RenderImage(props) {
    const { hasFocus, value } = props;
    return (
      <Card>
        <CardMedia
          component="img"
          height="80%"
          width="80%"
          src={value}
        ></CardMedia>
      </Card>
    );
  }
  function RenderListJobs(props) {
    const { hasFocus, value } = props;
    return (
      <Box sx={{ flexDirection: "column", display: "flex" }}>
        {value.map((e) => (
          <Typography variant="caption">- {e.JobName}</Typography>
        ))}
      </Box>
    );
  }
  const columns = [
    {
      field: "company",
      width: 180,
      headerName: "Company Name",
      editable: true,
    },
    {
      field: "image",
      width: 100,
      headerName: "Image",
      renderCell: RenderImage,
    },
    {
      field: "email",
      width: 100,
      headerName: "email company",
      editable: true,
    },
    { field: "Address", width: 150, headerName: "Address", editable: true },
    {
      field: "Website",
      width: 150,
      headerName: "Company Website",
      editable: true,
    },
    { field: "CompanySize", headerName: "Company Size", editable: true },
    { field: "BussinessAreas", headerName: "Bussiness Areas", editable: true },
    {
      field: "Decripsion",
      headerName: "Decripsion",
      width: 200,
      editable: true,
    },
    { field: "office", headerName: "office", editable: true },
    {
      field: "Joblist",
      width: 120,
      headerName: "Joblist",
      renderCell: RenderListJobs,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <>
      <DataGrid
        getRowHeight={() => "auto"}
        columns={columns}
        rows={rows}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </>
  );
}

export default GridDataCompany;
