import { Container, Box, Typography, Divider,Grid } from "@mui/material";
import JobCard from "../../components/Job/Jobcard";
import { JobData } from "../../components/Job/Data/jobData";
import { useSelector, useDispatch } from "react-redux";
import { Modal, CloseModal } from "../../redux/userSlice";
import ModalRegisterInstructor from "../../components/Student/Modal/modalregisterInstructor";
import ModalRegisterJob from "../../components/Student/Modal/modalregisterJob";
function StudentAppliedJob() {
  const ismodalOpen = useSelector(Modal);
  const dispatch = useDispatch();
  console.log(ismodalOpen);
  const HandleModalClose = () => {
    dispatch(CloseModal(false));
  };
  return (
    <>
      <ModalRegisterInstructor
        Open={ismodalOpen.Grade}
        Close={HandleModalClose}
      />
      <ModalRegisterJob
        Open={ismodalOpen.Announce}
        Close={HandleModalClose}
      ></ModalRegisterJob>
      <Box>
        <Typography
          sx={{
            marginLeft: "20px",
            color: "#1976d2",
            marginTop: "20px",
          }}
          variant="h3"
        >
          <b>List of Job Applied</b>
        </Typography>
        <Divider></Divider>

        <Grid
          container
          sx={{
            marginLeft: "20px",
            width: "auto",
          }}
        >
          {JobData.map((job) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
              xs={11}
              md={6}
              xl={4}
              key={job.id}
            >
              <JobCard Job={job} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default StudentAppliedJob;
