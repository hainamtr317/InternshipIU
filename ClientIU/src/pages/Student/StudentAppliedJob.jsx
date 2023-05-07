import { Container, Box, Typography, Divider,Grid } from "@mui/material";
import JobCard from "../../components/Job/Jobcard";

function StudentAppliedJob() {
  return (
    <>
      <Box>
        <Typography
        sx={{
        marginLeft:"20px",
        color: '#1976d2'
        ,marginTop:'20px'
        }}
        variant="h3">
            <b>

            List of Job Applied
            </b>
        </Typography>
        <Divider></Divider>
        
        <Grid container sx={{
            marginLeft:"20px"
            ,width:"auto"
        }}
        >
        {Array.from(Array(10)).map((_, index) => (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              
            }}
            xs={12}
            md={6}
            xl={3}
            key={index}
          >
            <JobCard />
          </Grid>
        ))}
        </Grid>
        
      </Box>
    </>
  );
}

export default StudentAppliedJob;
