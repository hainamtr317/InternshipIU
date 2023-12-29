import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
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
import UserModal from '../../pages/Admin/components/modalUserEdit';


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


function GriddataUser({rowData}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [userData,setUserData] = React.useState()
  const [role,setRole]= React.useState()

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
  const updatedRow = { ...newRow, isNew: false };
  // try {
  //   const dataGrading = ({  
  //     grade:{
  //       Grade:newRow.grade,
  //       Comment:newRow.gradeComment
  //     }
  //   })
  //   const user =await JSON.parse(localStorage.getItem("userData"))
  //   await Axios.put("/api/teacher/grading",{StudentId:newRow.id,data:dataGrading}).then(async(res)=>{
  //     if(res.data.success){
  //       await Axios.post("/api/teacher/saveStudent",{userId:user.userId}).then(async(res)=>{
  //         if(res.data.success){
  //           alert("Success grading for Student",newRow.id)
  //         }
  //       })
  //     }
  //     else{
  //       alert("have error grading for Student:",res.data.error)
  //     }
  //     })
  // } catch (error) {
  //   console.log(error)
  //   alert("have error grading for Student:",error)
  // }
  setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
  return updatedRow;
};

const handleRowModesModelChange = (newRowModesModel) => {
  setRowModesModel(newRowModesModel);
};

const handleOpenManager =async(id,row)=>{
  try {
    await Axios.post("/api/admin/getUserData",{userId:id}).then(async(res)=>{
      if(res.data.success){
        await setRole(row.Role)
        await setUserData(res.data.UserData)
        handleOpen()
      }
      else{
        alert("have error :")
      }
      })
  } catch (error) {
    console.log(error)
    alert("have error:")
  }
}
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      description: "Id of Student",
    },
    {
      field: "UserID",
      width: 150,
      headerName: "User ID",
      description: "User ID.",
    },  
    { field: "password", width: 150, headerName: "Password" },
    { field: "Role", width: 80, headerName: "Role" },
    { field: "dataUser", width: 150, headerName: "Data User" },
    { field: "Update"
    , width: 110
    , headerName: "Update date",
    valueFormatter: params => new Date(params?.value).toLocaleString(),
  },
    { field: "LoginStatus", width: 100, headerName: "Login Status" },
    {
      field: "Manager",
      width: 150,
      headerName: "Manager Data User",
      renderCell:({id,row})=>{
        return[
          <Box>
          <Button 
            variant="contained" size="small"
            startIcon={<ManageAccountsIcon/>}
            onClick={()=>{handleOpenManager(id,row)}}>
            Open
          </Button>

          </Box>
            ] 
      }
        
    },
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
      <DataGrid columns={columns} rows={rows} 
      />
      <UserModal Role={role} User={userData} Open={isOpen} Close={handleClose}></UserModal>    
    </>
  );
}

export default GriddataUser;
