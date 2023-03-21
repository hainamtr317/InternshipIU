import { CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, Card } from '@mui/material';
function JobCard() {
    return (
    <Card sx={{marginTop:10}}>
        <CardActionArea sx={{height:150,width:300}}>
            <div className="content">     
            <img src="/images/photo.svg"></img>
            <div className="desJob">
                <p> job name</p>
                <p>Company name</p>
            </div>
            </div>

            {/* <CardMedia
            component="img"
            height="50px"
            width="50px"
            image='/images/photo.svg'
            alt='green iguana'
            sx={{display:'flex',marginTop:0,float:'left'}}
            />
            <CardContent sx={{float:'right'}}>
                <Typography>Job Name</Typography>
                <Typography>Company Name</Typography>
               
            </CardContent> */}
        </CardActionArea>
    </Card>);
}

export default JobCard;