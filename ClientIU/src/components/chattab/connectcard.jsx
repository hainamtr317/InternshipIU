import { CardContent, CardMedia, Typography, Button, CardActionArea, Checkbox , Card, Avatar, IconButton } from '@mui/material';
import './chattab.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function ConnectCard() {
    return (
    <Card sx={{display:'flex',flexDirection:'row',boxShadow:'8'}}>
        <CardActionArea sx={{display:'flex',flexDirection:'row',boxShadow:'8'}}>

        <Avatar sx = {{margin:'15px 0px 10px 5px'}}></Avatar>
        <div className="card-content">
        <Typography sx = {{margin:'-15px 0px 10px 10px',width:'10px'}}>Name</Typography>
        <Typography sx = {{margin:'-10px 0px 10px 10px',fontSize:'12px'}}>From: msg content of aoifsjdofij sda</Typography>
        </div>
        <IconButton size="small" sx={{height:'10px',width:'10px',margin:'-50px 9px 0 0'}}>
            <MoreHorizIcon/>
        </IconButton>
        
        </CardActionArea>
    </Card>);
}

export default ConnectCard;