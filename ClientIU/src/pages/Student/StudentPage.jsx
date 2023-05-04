import * as React from "react";
import Header from "../../components/header/Header";
import Leftside from "../../components/leftside/leftside";
import MainLayout from "../../components/mainlayout/mainlayout.jsx";
import { Box, Grid } from "@mui/material";
import Rightside from "../../components/rightside/rightside";
import ChatTab from "../../components/chattab/chattab";

const StudentPage = () => {
  return (
    <Box sx={{ padding: "0", margin: "0", height: "950px" }}>
      <Header />

      <Grid container spacing={4} className="main" sx={{ marginTop: "120px" }}>
        <Grid sm>
          <Leftside />
        </Grid>
        <Grid sm={8}>
          <MainLayout />
        </Grid>
        <Grid sm>
          <Rightside />
        </Grid>
      </Grid>
      <ChatTab />
    </Box>
  );
};
export default StudentPage;
