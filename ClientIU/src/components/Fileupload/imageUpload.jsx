import { Alert, Box, Button, Input, Snackbar } from "@mui/material";
import React, { useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SendIcon from "@mui/icons-material/Send";
import AxiosUploadFile from "../../config/axiosUploadConfig";
function ImageUploadFile({ getFile }) {
  const [isAlertOpen, SetAlertOpen] = useState(false);
  const [file, setFiles] = useState();
  const HandleClose = () => {
    SetAlertOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file == undefined) {
      alert("add your image");
    } else {
      console.log(file);
      // create a new FormData object and append the file to it
      const postData = new FormData();
      postData.append("image", file);

      await AxiosUploadFile.post("/uploadImage", postData)
        .then((response) => {
          // handle the response
          console.log(response.data.img);
          getFile(response.data.img);
        })
        .catch((error) => {
          // handle errors
          console.log(error);
        });
    }
  };
  const handleFile = (e) => {
    e.preventDefault();
    setFiles(e.target.files[0]);
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
        component="form"
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
          required
          inputProps={{ accept: "image/png, image/jpeg" }}
          autoFocus="true"
          onChange={handleFile}
        ></Input>
        <Button
          sx={{
            marginLeft: "20px",
          }}
          variant="outlined"
          type="submit"
          startIcon={<FileUploadOutlinedIcon />}
          onClick={handleSubmit}
        >
          Upload
        </Button>
      </Box>
    </>
  );
}

export default ImageUploadFile;
