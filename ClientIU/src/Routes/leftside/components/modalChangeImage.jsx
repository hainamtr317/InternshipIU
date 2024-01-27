import React, { useMemo, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import {
  Modal,
  Box,
  Typography,
  CardContent,
  Button,
  Checkbox,
  Divider,
  Paper,
  TextField,
  Avatar,
} from "@mui/material";
import ImageUploadFile from "../../../components/Fileupload/imageUpload";
import Axios from "../../../config/axiosConfig";
import { useDispatch } from "react-redux";
import { checkLogged } from "../../../redux/userSlice";

function AvatarChangeModal({ Open, Close, UserId }) {
  const dispatch = useDispatch();
  const [img, setImage] = useState();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid whitesmoke",
    borderRadius: "10px",
    boxShadow: 24,
  };
  const handleChangeImage = async () => {
    await Axios.put("/api/users/dataUserUpdate", {
      userId: UserId,
      data: { AvatarImage: img },
    })
      .then(async (res) => {
        if (res.data.success) {
          try {
            const userData = await dispatch(checkLogged());
            await localStorage.setItem(
              "userData",
              JSON.stringify(userData.payload.data)
            );
            alert("change image success");
          } catch (error) {
            return alert("have error");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        alert("have some err");
      });
  };
  const textHolder = {
    display: "flex",
    flexDirection: "row",
    ml: "20px",
  };
  const handleClose = async () => {
    await setImage();
    Close();
  };

  return (
    <div>
      <Modal
        open={Open}
        onClose={handleClose}
        aria-labelledby="modal-user"
        aria-describedby="modal-user"
      >
        <Box sx={style}>
          <Typography component="h1">
            Change Avatar Image for {UserId}
          </Typography>
          <Divider></Divider>
          <Box
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageUploadFile getFile={setImage}></ImageUploadFile>
            <Box>
              <Avatar
                sx={{
                  width: "200px",
                  height: "200px",
                  ml: "250px",
                }}
                src={img}
              ></Avatar>
            </Box>
            <Button onClick={handleChangeImage}> Set Image</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AvatarChangeModal;
