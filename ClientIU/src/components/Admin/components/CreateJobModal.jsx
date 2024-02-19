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
import { auto } from "@popperjs/core";

function ModalCreateJob({ Open, Close }) {
  const teacherInfoDisplay = {
    display: "flex",
    flexDirection: "column",
    width: auto,
    borderRadius: "10px",
    boxShadow: 24,
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: auto,
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
    var nameJob = e.target.elements.nameJob.value;
    var salary = e.target.elements.salary.value;
    var SkillRequire = e.target.elements.SkillRequire.value;
    var Description = e.target.elements.Description.value;
    var arraySkill = SkillRequire.split(", ");
    await Axios.post("/api/Company/getCompany", { company: company }).then(
      async (data) => {
        try {
          console.log({
            nameJob: nameJob,
            company: company,
            image: data.data.companyData.image,
            Address: data.data.companyData.Address,
            salary: salary,
            Description: Description,
            SkillRequire: arraySkill,
          });
          await Axios.post("/api/jobs", {
            nameJob: nameJob,
            company: company,
            image: data.data.companyData.image,
            Address: data.data.companyData.Address,
            salary: salary,
            Description: Description,
            SkillRequire: arraySkill,
          }).then(async (res) => {
            if (res.data.createSuccess) {
              await Axios.get("/api/admin/CompaniesAndJobs").then((s) => {
                if (s.data.success) {
                  alert("create Company success", nameJob);
                }
              });
              location.reload(true);
            } else {
              alert("have err");
              location.reload(true);
            }
          });
        } catch (error) {
          console.log(error);
        }
      }
    );
  };
  return (
    <>
      <Modal
        open={Open}
        onClose={Close}
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
                <Typography variant="h5"> Create Job</Typography>
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
                      Job Name:
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      required
                      id="nameJob"
                      name="nameJob"
                      label="Job Name"
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

                <Box sx={textHolder}>
                  <Box>
                    <Typography
                      sx={{
                        mt: "12px",
                      }}
                    >
                      Salary:
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      id="salary"
                      name="salary"
                      label="Salary job"
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
                      Skill Require:
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      id="SkillRequire"
                      name="SkillRequire"
                      label="insert skill and have comma and space after skills"
                      sx={{ ml: "10px", width: 400 }}
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
                      id="Description"
                      name="Description"
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
      </Modal>
    </>
  );
}

export default ModalCreateJob;
