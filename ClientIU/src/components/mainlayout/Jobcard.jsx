import { CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, Card } from '@mui/material';
function JobCard() {
    return (
    <Card sx={{display:"flex",marginTop:30 }}>
        <CardActionArea sx={{justifyItems:'center'}}>
            <CardMedia
            component="img"
            height="auto"
            width="auto"
            image='/images/photo.svg'
            alt='green iguana'
            sx={{display:'flex',marginTop:0,float:'left'}}
            />
            <CardContent sx={{}}>
                <Typography>Job Name</Typography>
                <Typography>Company Name</Typography>
               
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button>Apply</Button>
        </CardActions>
    </Card>);
}

export default JobCard;