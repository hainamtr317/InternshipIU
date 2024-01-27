import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import { useState } from "react";
import Axios from "../../config/axiosConfig";
import { useNavigate } from "react-router-dom";
function CompanyCard({ CompanyName }) {
  const [companyData, setCompanyData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const handleCompanyRedirect = () => {
    navigate("/Student/Company");
  };
  useEffect(() => {
    const getCompanyData = async () => {
      try {
        await Axios.post("/api/Company/getCompany", {
          company: CompanyName,
        }).then(async (res) => {
          await setCompanyData(res.data.companyData);
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getCompanyData();
  }, []);

  if (isLoading) {
    return (
      <>
        <div>
          <Card>isLoading</Card>
        </div>
      </>
    );
  }

  return (
    <>
      <Box>
        <Card>
          <Box
            sx={{
              display: "flex",
              border: 1,
              flexDirection: "column",
            }}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <CardMedia
                sx={{
                  heigth: "70px",
                  width: "70px",
                }}
                component="img"
                image={companyData.image}
                onClick={handleCompanyRedirect}
                alt="false to load image"
              ></CardMedia>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "5px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "medium",
                    fontWeight: "bold",
                    color: "#1976d2",
                  }}
                  onClick={handleCompanyRedirect}
                >
                  {companyData.company}
                </Typography>
                <Typography>{companyData.CompanySize}</Typography>
                <Typography variant="caption">
                  Link Website company:{companyData.Website}
                  <IconButton size="small">
                    <LaunchIcon fontSize="small" color="primary" />
                  </IconButton>
                </Typography>
              </Box>
            </Container>
            <Container>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                Company decription
              </Typography>
              <Typography>{companyData.Description}</Typography>
            </Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                Office address:
              </Typography>
              <Typography variant="p">{companyData.office}</Typography>
            </Container>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default CompanyCard;
