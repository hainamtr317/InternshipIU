import { Divider, Typography, Input, Container,Box,Grid } from "@mui/material";
import FileUploadReport from "../../components/Fileupload/FileuploadReport";
import ReportCard from "../../components/Report/ReportCard";

function StudentReport() {
  return (
    <>
      <Typography
        sx={{
          color: "#1976d2",
          marginLeft: "20px",
          marginTop: "20px",
        }}
        variant="h3"
      >
        <b>Report</b>
      </Typography>
      <Divider></Divider>
      <Container
      //  sx={{
      //     borderStyle: "groove",
      //     border: "2px whitesmoke solid",
      //     boxShadow: "8",
      //     marginTop: "10px",
      //   }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#1976d2",
          }}
        >
          Your Report:
        </Typography>
        <Divider></Divider>
        <Container>
          <FileUploadReport></FileUploadReport>
        </Container>
      </Container>
      <Divider></Divider>
      <Container>
        <Typography
          variant="h5"
          sx={{
            color: "#1976d2",
          }}
        >
          Report from:
        </Typography>
        <Divider></Divider>
        <Box>
        <Grid
          container
          sx={{
            marginLeft: "10px",
            width: "auto",
          }}
        >
          {Array.from(Array(3)).map((_, index) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
              xs={12}
              md={6}
              xl={4}
              key={index}
            >
              <ReportCard></ReportCard>
            </Grid>
          ))}
        </Grid>
          
        </Box>
      </Container>
    </>
  );
}

export default StudentReport;
