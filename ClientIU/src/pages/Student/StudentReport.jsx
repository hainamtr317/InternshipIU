import { Divider, Typography,Input, Container } from "@mui/material";

function StudentReport() {
    return ( <>
    
    <Typography
    sx={{
        color: '#1976d2'
        ,marginLeft:'20px'
        ,marginTop:'20px'
    }}
    variant="h3"><b>
        Report
        </b>
        </Typography>
    <Divider></Divider>
    <Container>
    <Typography variant="h5">Your Report:</Typography>
    <Input type="file"></Input>
    This will display list report file your upload is uploaded
    </Container>
    <Divider></Divider>
    <Container>
    <Typography variant="h5"> Report from:</Typography>
    </Container>
    </> );
}

export default StudentReport;