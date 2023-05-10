import StudentCard from "../../components/Student/StudentCard";
import { Grid, Typography, Divider } from "@mui/material";
function TeacherListStudents() {
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
        <b>Students List:</b>
      </Typography>
      <Divider></Divider>
      <Grid
        container
        sx={{
          marginLeft: "10px",
          width: "auto",
          height: "auto",
        }}
      >
        {Array.from(Array(4)).map((_, index) => (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              marginTop: "20px",
            }}
            xs={10}
            md={5}
            xl={3}
            key={index}
          >
            <StudentCard></StudentCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default TeacherListStudents;
