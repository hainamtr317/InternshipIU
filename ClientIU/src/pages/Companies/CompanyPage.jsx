import {
  Modal,
  Box,
  Typography,
  CardContent,
  Button,
  Checkbox,
  Divider,
  Paper,
  Link,
  CardMedia,
  Container,
  Card,
  Grid,
} from "@mui/material";
import JobCard from "../../components/Job/Jobcard";
import React from "react";
import { JobData } from "../../components/Job/Data/jobData";
const textstylebox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  mt: "10px",
};
const textstyle = {
  fontsize: "14px",
  color: "rgb(119, 119, 119)",
  fontfamily: "Poppins, Helvetica Neue, Arial, Helvetica, sans-serif",
};
const textbottomstyle = {
  fontsize: "16px",
  fontfamily: "Poppins, Helvetica Neue, Arial, Helvetica, sans-serif",
  fontWeight: 450,
};
function CompanyPage() {
  return (
    <>
      <center>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Paper
            sx={{
              height: "200px",
              borderStyle: "groove",
              border: "1px whitesmoke solid",
              width: "100%",

              backgroundImage: "url(/images/card-bg.svg)",
              backgroundSize: "cover",
            }}
          ></Paper>
          <CardMedia
            sx={{
              height: "150px",
              width: "150px",
              border: "1px whitesmoke solid",
              mt: "-30px",
            }}
            component="img"
            image="https://images.glints.com/unsafe/160x0/glints-dashboard.s3.amazonaws.com/company-logo/5a98a3f6322f6a5fdf0d55d182f3d683.png"
            alt="green iguana"
          />
          <Typography variant="h4">Company Name</Typography>
          <Typography variant="subtitle1">website URL</Typography>

          <Box sx={textstylebox}>
            <Typography sx={textstyle}>Address</Typography>
            <Typography sx={textbottomstyle}> Viet Nam</Typography>
          </Box>
          <Box sx={textstylebox}>
            <Typography sx={textstyle}>website</Typography>
            <Typography sx={textbottomstyle}> company website url</Typography>
          </Box>
          <Box sx={textstylebox}>
            <Typography sx={textstyle}>Business areas</Typography>
            <Typography sx={textbottomstyle}> Technology</Typography>
          </Box>
          <Box sx={textstylebox}>
            <Typography sx={textstyle}>Company Size</Typography>
            <Typography sx={textbottomstyle}> 100 Employee</Typography>
          </Box>
          <Button
            variant="outlined"
            sx={{
              width: "90%",
            }}
          >
            List Company's Jobs
          </Button>
        </Box>
      </center>
      <br></br>
      <Divider></Divider>
      <Container
        sx={{
          boxShadow: 2,
          borderRadius: 3,
          width: "95%",
        }}
      >
        <Typography variant="h6">Company Information</Typography>
        <Divider></Divider>
        <Typography
          variant="h7"
          sx={{
            fontfamily: "Poppins, Helvetica Neue, Arial, Helvetica, sans-serif",
            fontWeight: 500,
          }}
        >
          {" "}
          Introduction
        </Typography>
        <br></br>
        <Box>
          <CardContent>
            Tập Đoàn Đầu Tư Miền Nam_Miền Nam Group là một doanh nghiệp tư nhân
            kinh doanh đa lĩnh vực với các hoạt động đa ngành nghề tạo nên một
            hệ sinh thái toàn diện từ ô tô, xe máy, thương mại, xây dựng, hạ
            tầng đến các giải pháp công nghệ & truyền thông, nhà hàng,...Đến
            nay, hệ thống đã phát triển hơn 20 công ty thành viên và hơn 40
            showroom kinh doanh ô tô cùng các lĩnh vực khác. Ô Tô Miền Nam là
            tiền thân của Miền Nam Group, phân phối các dòng xe tải chính hãng:
            Hino, Isuzu, Hyundai,…Có 13 Chi nhánh khắp toàn quốc. Hyundai Miền
            Nam chuyên kinh doanh và sửa chữa các dòng xe thương mại (xe tải, xe
            buýt, xe khách, xe chuyên dùng) & Hyundai Miền Nam mở rộng hoạt động
            kinh doanh các dòng xe du lịch (4 chỗ, 7 chỗ, xe bán tải...) tại các
            các Dealed Hyundai Miền Nam 3S (Quận 12), Hyundai Miền Nam 1S (Bình
            Tân) Motor Miền Nam hoạt động trong lĩnh vực kinh doanh, phân phối
            các dòng xe máy, xe điện. Piaggio Motor Miền tọa lạc tại Tô Ký –
            Quận 12 & Nguyễn Sơn – Tân Phú là một trong số những cửa hàng đầu
            tiên tại Việt Nam được xây dựng theo tiêu chuẩn Motoplex mới nhất
            của Piaggio Group (Ý). Vận tải Nhanh Rẻ hiện là đối tác dịch vụ vận
            tải, giao nhận, của nhiều doanh nghiệp HCM & các khu vực lân cận.
            Chúng tôi kinh doanh các dịch vụ chính về: giao nhận hàng hóa, đăng
            ký đăng kiểm, cứu hộ giao xe & cho thuê xe với nhiều khách hàng tin
            cậy. Chuyên Dùng Miền Nam là đơn vị chính sản xuất và cung cấp các
            loại thùng xe cho hệ thống đại lý kinh doanh xe thương mại của Miền
            Nam Group. Toàn bộ các mẫu thùng xe tải, xe chuyên dụng do Chuyên
            Dùng Miền Nam thiết kế, sản xuất đều đạt tiêu chuẩn về chất lượng do
            Cục Đăng Kiểm Việt Nam quy định. Cung ứng Phụ tùng MNG hoạt động
            trong lĩnh vực cung cấp, phân phối các loại phụ tùng, phụ kiện xe
            thương mại, xe ô tô, xe máy. Dịch Vụ Sửa Chữa Ô Tô Miền Nam với 4 CN
            tại Tp. HCM, Bình Dương, Tp. Buôn Ma Thuột chuyên bảo dưỡng, sửa
            chữa, Gầm Máy, Đồng Điện, Sơn làm bảo hiểm xe,… Yanmar Miền Nam là
            đại lý Chuyên phân phối tất cả các dòng máy nông nghiệp mang thương
            hiệu Nhật Bản như Máy Cày - Máy Gặt Lúa - Phụ tùng chính hãng. Công
            ty CP Xây Dựng Minacons là đơn vị chuyên xây dựng các Showroom Ô Tô,
            nhà xưởng đạt tiêu chuẩn các Hãng Ô Tô. MG Trường Chinh là đại lý
            chuyên cung cấp dòng xe MG & phụ tùng chính hãng. Đại lý đạt chuẩn
            3S đầu tiên tại Tp. HCM. Miền Nam Group hướng đến việc trở thành một
            trong những tập đoàn tư nhân hoạt động đa lĩnh vực & xây dựng một
            môi trường cùng văn hóa làm việc cân bằng giữa làm kinh tế & phát
            triển đời sống cho CBNV. Mỗi CBNV đều là một cộng sự, một mảnh ghép
            quan trọng cho sự phát triển lớn mạnh, bền vững của Tập đoàn. Văn
            hóa doanh nghiệp
          </CardContent>
          <Typography
            variant="h7"
            sx={{
              fontfamily:
                "Poppins, Helvetica Neue, Arial, Helvetica, sans-serif",
              fontWeight: 500,
            }}
          >
            {" "}
            Address:
          </Typography>
          <br></br>
          <Typography variant="p"> Company address</Typography>
        </Box>
      </Container>
      <Container
        sx={{
          boxShadow: 2,
          borderRadius: 3,
          width: "95%",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 450 }}>
          {" "}
          Jobs
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
      </Container>
    </>
  );
}

export default CompanyPage;
