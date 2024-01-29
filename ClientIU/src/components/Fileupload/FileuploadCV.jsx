import { Alert, Box, Button, Input, Snackbar } from "@mui/material";
import React, { useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Axios from "../../config/axiosConfig";
import AxiosUploadFile from "../../config/axiosUploadConfig";

function FileUploadCv({ StudentId }) {
  const [isAlertOpen, SetAlertOpen] = useState(false);
  const [file, setFiles] = useState();
  const HandleClose = () => {
    SetAlertOpen(false);
  };
  const handleFile = (e) => {
    setFiles(e.target.files[0]);
  };

  const handleCreate = async () => {
    if (file == undefined) {
      alert("add your CV");
    } else {
      if (confirm(`Are you sure you want to add this Cv for ${StudentId}`)) {
        const postData = new FormData();
        postData.append("userCv", file);
        await AxiosUploadFile.post("/uploadCv", postData)
          .then(async (response) => {
            console.log(response.data);
            await Axios.post("/api/student/AddCv", {
              StudentId: StudentId,
              NameCv: response.data.NameCV,
              Cv: response.data.Cv,
            }).then((res) => {
              if (res.data.success) {
                alert(res.data.msg);
                location.reload();
              } else [alert(res.data.error)];
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // Do nothing!
        console.log("Thing was not saved to the database.");
      }
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isAlertOpen}
        onClose={HandleClose}
        autoHideDuration={4000}
      >
        <Alert
          onClose={HandleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          File input is not PDF file
        </Alert>
      </Snackbar>
      <Box
        sx={{
          marginLeft: "40px",
          height: "auto",
        }}
      >
        <Input
          sx={{
            height: "auto",
            width: "70%",
          }}
          type="file"
          inputProps={{ accept: "application/pdf" }}
          autoFocus="true"
          onChange={handleFile}
        ></Input>
        <Button
          sx={{
            marginLeft: "20px",
          }}
          variant="outlined"
          startIcon={<FileUploadOutlinedIcon />}
          onClick={handleCreate}
        >
          Upload
        </Button>
      </Box>
    </>
  );
}

export default FileUploadCv;
