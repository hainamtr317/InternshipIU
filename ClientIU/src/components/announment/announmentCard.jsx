import { Box, Container,Paper,Avatar, Typography, Divider, Step,
    StepLabel,
    Stepper,
    LinearProgress, } from "@mui/material";
import { MenuItem } from "@mui/material";
function AnnounceCard({announcement}) {
    return ( <>
    <MenuItem sx={{
        flexDirection:'column',
        width:"270px",
        textAlign:"start",
        justifyContent:'start',
        left:"0px"
    }}>
        <Typography
        sx={{
        textAlign:"start",
        justifyContent:'start',
        overflow: "hidden"
        }}
        >Send From:{announcement.whoSend}</Typography>
        <Typography
         sx={{
            textAlign:"start",
            justifyContent:'start',
            overflow: "hidden"
            }}
        >{announcement.announcementContent}</Typography>
    </MenuItem>
    </> );
}

export default AnnounceCard;