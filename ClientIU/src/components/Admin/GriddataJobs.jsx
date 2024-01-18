import { Button, Card, CardMedia, Box } from "@mui/material";
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
import ModalCreateJob from "./components/CreateJobModal";

function EditToolbar(props) {
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
          Add Job
        </Button>
      </GridToolbarContainer>
      <ModalCreateJob Open={OpenReg} Close={handleCloseReg}></ModalCreateJob>
    </>
  );
}

function GridDataJobs({ rowData }) {
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
      await Axios.post("/api/Company/getCompany", {
        company: newRow.company,
      }).then(async (data) => {
        try {
          const dataUpdate = {
            nameJob: newRow.nameJob,
            company: newRow.company,
            image: data.data.companyData.image,
            Address: data.data.companyData.Address,
            salary: newRow.salary,
            Description: newRow.Description,
            SkillRequire: newRow.SkillRequire,
          };

          await Axios.put("/api/jobs", {
            id: newRow.id,
            updateData: dataUpdate,
          }).then(async (res) => {
            if (res.data.updateSuccess) {
              alert("Success update job", newRow.nameJob);
              location.reload(true);
            } else {
              alert("have error ");
              location.reload(true);
            }
          });
          setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
          return updatedRow;
        } catch (error) {
          console.log(error);
          alert("have error :", error);
        }
      });
    } else {
      alert("nothing change");
      location.reload(true);
    }
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  function RenderImage(props) {
    const { value } = props;
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
  const columns = [
    { field: "nameJob", width: 150, headerName: "Job Name", editable: true },
    { field: "company", width: 150, headerName: "Company", editable: true },
    {
      field: "image",
      width: 100,
      headerName: "Image",
      renderCell: RenderImage,
    },
    { field: "salary", headerName: "salary", editable: true },
    { field: "Address", width: 100, headerName: "Address" },
    {
      field: "Description",
      width: 270,
      headerName: "Description",
      editable: true,
    },
    { field: "companyRef", headerName: "companyRef", editable: true },
    {
      field: "SkillRequire",
      width: 150,
      headerName: "SkillRequire",
      editable: true,
    },
    { field: "update", headerName: "update" },
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
        onProcessRowUpdateError={(error) => {
          console.log(error);
        }}
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

export default GridDataJobs;
