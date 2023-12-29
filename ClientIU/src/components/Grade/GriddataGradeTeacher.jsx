import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';
import Axios from '../../config/axiosConfig';
import { ExportButton } from './components/ExportButton';

function CustomToolbar(props) {
  return (
    <GridToolbarContainer {...props}>
      <ExportButton />
    </GridToolbarContainer>
  );
}

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

function GridDataGradeTeacher(props) {
  const [rows, setRows] = React.useState(props.rowData);
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
    const updatedRow = { ...newRow, isNew: false };
    try {
      const dataGrading = ({  
        grade:{
          Grade:newRow.grade,
          Comment:newRow.gradeComment
        }
      })
      const user =await JSON.parse(localStorage.getItem("userData"))
      await Axios.put("/api/teacher/grading",{StudentId:newRow.id,data:dataGrading}).then(async(res)=>{
        if(res.data.success){
          await Axios.post("/api/teacher/saveStudent",{userId:user.userId}).then(async(res)=>{
            if(res.data.success){
              alert("Success grading for Student",newRow.id)
            }
          })
        }
        else{
          alert("have error grading for Student:",res.data.error)
        }
        })
    } catch (error) {
      console.log(error)
      alert("have error grading for Student:",error)
    }
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      description: "Id of Student",
    },
    {
      field: "studentName",
      width: 130,
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
    { field: "Report", width: 100, headerName: "Report" },
    { field: "status", headerName: "Status" },
    { field: "grade", headerName: "Grade" ,editable: true},
    { field: "gradeComment",width:300, headerName: "grade Comment",editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
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
    }
  ];

  return (
    <>
      <DataGrid 
      rows={rows}
      columns={columns}
      editMode="row"
      rowModesModel={rowModesModel}
      onRowModesModelChange={handleRowModesModelChange}
      onRowEditStop={handleRowEditStop}
      processRowUpdate={processRowUpdate}
      slots={{
        toolbar: CustomToolbar,
      }}
      slotProps={{
        toolbar: { setRows, setRowModesModel },
      }}
      />
    </>
  );
}

export default GridDataGradeTeacher;
