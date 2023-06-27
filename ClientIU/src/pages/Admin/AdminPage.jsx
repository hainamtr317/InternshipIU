import * as React from "react";
import Header from "../../components/header/Header";
import Leftside from "../../Routes/leftside/leftside";
import MainLayout from "../../Routes/mainlayout/mainlayout.jsx";
import { Box, Grid } from "@mui/material";
import Rightside from "../../Routes/rightside/rightside";
import ChatTab from "../../components/chattab/chattab";

const AdminPage = () => {
  return (
    <Box sx={{ padding: "0", margin: "0", height: "950px" }}>
      <Header />
      <Grid container className="main" sx={{ marginTop: "120px" }}>
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
export default AdminPage;
