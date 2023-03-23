import { CardContent, CardMedia, Typography, Button, CardActionArea, Checkbox , Card } from '@mui/material';
import './jobcard.scss';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function JobCard() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
    <Card className="jobcard" sx={{height:150,width:300}}>
        <a className="actioncard">
            <div className="content">
            <CardMedia
            sx={{height:'70px',width:'70px',marginTop:"-10px",
        }}
        component="img"
        image='/images/photo.svg'
        alt='green iguana'   
        />

            <CardContent sx={{marginTop:'-10px'
            ,height:'20px'
            }}>
                <Typography variant='p' sx={{marginLeft:'-12px',marginTop:'-17px'}}>Job Name is lenght than expected</Typography>
                <Typography variant='caption'  sx={{marginLeft:'-12px',}}>Company Name</Typography>     
            </CardContent>
          
        </div>
            
            <Typography variant='p' sx={{marginLeft:'5px'
            ,marginTop:'-30px',color:'black' 
            }}>
                dfajsldkfjao
                asdfas
                asdf
                asdfasasdfs
                </Typography>
          
        </a>      
        <Checkbox
        sx={{marginLeft:"250px"}}
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </Card>
    );
}

export default JobCard;