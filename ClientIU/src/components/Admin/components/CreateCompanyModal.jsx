import React, { useMemo, useState } from "react";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import UpdateIcon from "@mui/icons-material/Update";
import { Link, redirect, useNavigate } from "react-router-dom";
import Axios from "../../../config/axiosConfig";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import ImageUploadFile from "../../Fileupload/imageUpload";

function ModalCreateCompany({ Open, Close }) {
  const [Role, setRole] = useState("student");
  const [linkImage, getLinkImage] = useState();
  const handleClose = async () => {
    await getLinkImage();
    Close();
  };
  const teacherInfoDisplay = {
    display: "flex",
    flexDirection: "column",
    width: 700,
    borderRadius: "10px",
    boxShadow: 24,
  };
  const styleBox = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  };
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
    p: 4,
  };
  const textHolder = {
    display: "flex",
    flexDirection: "row",
    ml: "20px",
  };
  const handleClickUpdate = async (e) => {
    e.preventDefault();
    var company = e.target.elements.company.value;
    var image = e.target.elements.image.value;
    var Address = e.target.elements.Address.value;
    var email = e.target.elements.email.value;
    var Website = e.target.elements.Website.value;
    var CompanySize = e.target.elements.CompanySize.value;
    var BussinessAreas = e.target.elements.BussinessAreas.value;
    var Decripsion = e.target.elements.Decripsion.value;
    var office = e.target.elements.office.value;

    const dataCreateCompany = {
      company: company,
      image: image,
      email: email,
      Address: Address,
      Website: Website,
      CompanySize: CompanySize,
      BussinessAreas: BussinessAreas,
      Decripsion: Decripsion,
      office: office,
    };

    try {
      await Axios.post("/api/Company", dataCreateCompany).then(async (res) => {
        if (res.data.createSuccess) {
          alert("create Company success", company);
          location.reload(true);
        } else {
          alert("have err");
          location.reload(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal
        open={Open}
        onClose={handleClose}
        aria-labelledby="modal-user"
        aria-describedby="modal-user"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: "20px",
              }}
            >
              <Box>
                <Typography variant="h5"> Create Company</Typography>
              </Box>
              <Box
                component="form"
                onSubmit={(e) => {
                  handleClickUpdate(e);
                }}
                sx={teacherInfoDisplay}
              >
                <Box sx={textHolder}>
                  <Box>
                    <Typography
                      sx={{
                        mt: "12px",
                      }}
                    >
                      Company:
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      required
                      id="company"
                      name="company"
                      label="Company Name"
                      sx={{ ml: "10px" }}
                      variant="filled"
                    ></TextField>
                  </Box>
                </Box>

                <Box sx={{ flexDirection: "column", ml: "20px" }}>
                  <Box>
                    <Typography
                      sx={{
                        mt: "12px",
                      }}
                    >
                      Image:
                    </Typography>
                    <Typography variant="caption">
                      Send image to get Link server image upload
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      flexDirection: "column",
                      ml: "-20px",
                    }}
                  >
                    <ImageUploadFile getFile={getLinkImage}></ImageUploadFile>
                    <TextField
                      required
                      id="image"
                      name="image"
                      value={linkImage}
                      label="Image Link"
                      sx={{ ml: "40px", width: "200px" }}
                      variant="filled"
                    ></TextField>
                  </Box>
                </Box>

                <Box sx={textHolder}>
                  <Box>
                    <Typography
                      sx={{
                        mt: "12px",
                      }}
                    >
                      Email:
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="email"
                      sx={{ ml: "10px" }}
                      variant="filled"
                    ></TextField>
                  </Box>
                </Box>

                <Box sx={textHolder}>
                  <Box>
                    <Typography
                      sx={{
                        mt: "12px",
                      }}
                    >
                      Address:
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      required
                      id="Address"
                      name="Address"
                      label="Address"
                      sx={{ ml: "10px" }}
                      variant="filled"
                    ></TextField>
                  </Box>
                </Box>

                <Box sx={textHolder}>
                  <Box>
                    <Typography
                      sx={{
                        mt: "12px",
                      }}
                    >
                      Website:
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      id="Website"
                      name="Website"
                      label="Website Company"
                      sx={{ ml: "10px" }}
                      variant="filled"
                    ></TextField>
                  </Box>
                </Box>

                <Box sx={textHolder}>
                  <Box>
                    <Typography
                      sx={{
                        mt: "12px",
                      }}
                    >
                      CompanySize:
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      id="CompanySize"
                      name="CompanySize"
                      label="Company Size"
                      sx={{ ml: "10px" }}
                      variant="filled"
                    ></TextField>
                  </Box>
                </Box>

                <Box sx={textHolder}>
                  <Box>
                    <Typography
                      sx={{
                        mt: "12px",
                      }}
                    >
                      Business Areas:
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      id="BussinessAreas"
                      name="BussinessAreas"
                      label="Business Areas"
                      sx={{ ml: "10px" }}
                      variant="filled"
                    ></TextField>
                  </Box>
                </Box>

                <Box sx={textHolder}>
                  <Box>
                    <Typography
                      sx={{
                        mt: "12px",
                      }}
                    >
                      office:
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      required
                      id="office"
                      name="office"
                      label="office Address"
                      sx={{ ml: "10px" }}
                      variant="filled"
                    ></TextField>
                  </Box>
                </Box>

                <Box sx={(textHolder, {})}>
                  <Box>
                    <Typography
                      sx={{
                        mt: "12px",
                      }}
                    >
                      Description :
                    </Typography>
                  </Box>
                  <Box>
                    <textarea
                      id="Decripsion"
                      name="Decripsion"
                      rows={10}
                      cols={80}
                      label="Company description"
                    />
                  </Box>
                  {/* <Box>
                    <Textarea
                      minRows={10}
                      id="Decripsion"
                      name="Decripsion"
                      label="Company description"
                      sx={{ ml: "10px", width: "3000px" }}
                      variant="filled"
                    />
                  </Box> */}
                </Box>

                <Box
                  sx={{
                    mt: "10px",
                    flex: 1,
                    flexDirection: "row",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      flex: 6,
                    }}
                  ></Box>
                  <Button
                    sx={{
                      flex: 1,
                    }}
                    variant="contained"
                    size="medium"
                    type="submit"
                  >
                    Update
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default ModalCreateCompany;
