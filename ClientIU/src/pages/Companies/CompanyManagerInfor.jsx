import {
  Box,
  Divider,
  Typography,
  LinearProgress,
  Button,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Axios from "../../config/axiosConfig";
import { auto } from "@popperjs/core";
import ImageUploadFile from "../../components/Fileupload/imageUpload";
function CompanyMangerInfo() {
  // const rows = companyData;
  const [rows, setRows] = useState([]);
  const CompanyData = JSON.parse(localStorage.getItem("userData"));
  const [Com, SetCom] = useState();
  const [linkImage, getLinkImage] = useState();
  const [isLoading, SetIsLoading] = useState(true);
  const getData = async () => {
    await Axios.post("/api/Company/getCompanyByID", {
      id: CompanyData.CompanyID,
    }).then(async (res) => {
      await SetCom(res.data.companyData);
      await getLinkImage(res.data.companyData.image);
      SetIsLoading(false);
    });
  };
  const handleClickUpdate = async (e) => {
    e.preventDefault();
    var company = e.target.elements.company.value;
    var image = e.target.elements.image.value;
    var Address = e.target.elements.Address.value;
    var email = e.target.elements.email.value;
    var password = e.target.elements.email.password;
    var Website = e.target.elements.Website.value;
    var CompanySize = e.target.elements.CompanySize.value;
    var BussinessAreas = e.target.elements.BussinessAreas.value;
    var Decripsion = e.target.elements.Decripsion.value;
    var office = e.target.elements.office.value;

    const dataUpdateCompany = {
      company: company,
      image: image,
      email: email,
      password: password,
      Address: Address,
      Website: Website,
      CompanySize: CompanySize,
      BussinessAreas: BussinessAreas,
      Decripsion: Decripsion,
      office: office,
    };

    try {
      await await Axios.put("/api/Company", {
        id: CompanyData.CompanyID,
        updateData: dataUpdateCompany,
      }).then(async (res) => {
        if (res.data.success) {
          alert("update Company success", company);
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

  const textHolder = {
    display: "flex",
    flexDirection: "row",
    ml: "20px",
  };
  const teacherInfoDisplay = {
    display: "flex",
    flexDirection: "column",
    width: auto,
    borderRadius: "10px",
    boxShadow: 24,
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <>
        <Box sx={{}}>
          <LinearProgress>
            <Typography>Loading...</Typography>
          </LinearProgress>
        </Box>
      </>
    );
  }
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
          }}
        >
          <Typography
            sx={{
              color: "#1976d2",
              marginLeft: "10px",
              marginTop: "20px",
            }}
            variant="h4"
          >
            <b>Company manager:</b>
          </Typography>
          <Box
            sx={{
              ml: "700px",
            }}
          ></Box>
        </Box>
        <Divider></Divider>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
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
                    defaultValue={Com.company}
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
                    defaultValue={linkImage}
                    label="Image Link"
                    sx={{ ml: "40px", width: "600px" }}
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
                    defaultValue={Com.email}
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
                    Password:
                  </Typography>
                </Box>
                <Box>
                  <TextField
                    required
                    id="password"
                    name="password"
                    defaultValue={Com.password}
                    label="password"
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
                    defaultValue={Com.Address}
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
                    defaultValue={Com.Website}
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
                    defaultValue={Com.CompanySize}
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
                    defaultValue={Com.BussinessAreas}
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
                    defaultValue={Com.office}
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
                    defaultValue={Com.Decripsion}
                    rows={10}
                    cols={80}
                    label="Company description"
                  />
                </Box>
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
    </>
  );
}

export default CompanyMangerInfo;
