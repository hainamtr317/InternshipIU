import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import { JobData } from "../../components/Job/Data/jobData";
import { useNavigate } from "react-router-dom";
function CompanyCard(props) {
  const navigate = useNavigate();
  const Job = JobData.find((job) => {
    if (job.id === props.jobid) {
      return job;
    } else {
      return "Unfine";
    }
  });
  const handleCompanyRedirect = ()=>{
    navigate("/Student/Company");
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
                image={Job.image}
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
                  {Job.company}
                </Typography>
                <Typography>Software - 100 Employees</Typography>
                <Typography variant="caption">
                  Link Website company
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
              <Typography>
                ông ty w2Solution Nhật Bản kinh doanh và phát triển web thương
                mại điện tử (sau đây gọi là Package, EC site). Package của chúng
                tôi được các công ty hàng đầu như Microsoft, Rakuten, Amuse sử
                dụng và được các công ty này đánh giá là package hàng đầu Nhật
                Bản ở tính năng và bảo mật thông tin. Và chúng tôi đang nhắm đến
                “Xây dựng EC site số 1 thế giới”
              </Typography>
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
              <Typography variant="p">{Job.Address}</Typography>
            </Container>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default CompanyCard;
