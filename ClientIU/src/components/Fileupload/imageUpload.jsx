import { Alert, Box, Button, Input, Snackbar } from "@mui/material";
import React, { useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SendIcon from "@mui/icons-material/Send";
function ImageUploadFile() {
  const [isAlertOpen, SetAlertOpen] = useState(false);
  const HandleClose = () => {
    SetAlertOpen(false);
  };

  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
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
          inputProps={{ accept: "image/png, image/jpeg" }}
          autoFocus="true"
          onChange={handleFile}
        ></Input>
        <Button
          sx={{
            marginLeft: "20px",
          }}
          variant="outlined"
          startIcon={<FileUploadOutlinedIcon />}
        >
          Upload
        </Button>
      </Box>
    </>
  );
}

export default ImageUploadFile;
