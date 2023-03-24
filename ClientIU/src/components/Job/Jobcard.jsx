import { CardContent, CardMedia, Typography, Button, CardActionArea, Checkbox,Box, Card } from '@mui/material';
import './jobcard.scss';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function JobCard() {
    
    return (
    <Card className="jobcard" sx={{height:150,width:300
        ,borderStyle: 'groove'
        ,border: '2px whitesmoke solid'
       ,boxShadow:'8'
    ,overflow:'hidden',margin:'5px 5px 5px 0px'}}>
        <CardActionArea sx={{}} className="actioncard">
            <div className="content">
            <CardMedia
            sx={{height:'70px',width:'70px',
        }}
        component="img"
        image='/images/photo.svg'
        alt='green iguana'   
        />

            <CardContent sx={{
            height:'20px'
            ,display:'flex'
            
            ,flexDirection:'column'
            ,justifyContent:'start'
            ,alignItems:'start'
            ,marginTop:'-10px'
            
            }}>
                <Typography variant='p' sx={{marginLeft:'-12px'
                ,fontFamily:'Arial, Helvetica, sans-serif'
                ,fontSize:'medium'
                ,fontWeight:'bold'
                ,color:'#1976d2'
                }}>Job Name is lenght asfdkjsaodfkjsaodifjt</Typography>
                <Typography variant='caption'  sx={{marginLeft:'-12px'
                
                ,fontWeight:'bold'
                ,fontFamily:'Arial, Helvetica, sans-serif'
                }}>Company Name</Typography>     
            </CardContent>
          
        </div> 
        <CardContent sx={{}}>
            <Typography variant='p' sx={{marginLeft:'5px'
            ,marginTop:'0px',color:'black' 
        }}>
                dfajsldkfjao
                asdfas
                asdf
                asdfasasdfs
                </Typography>
        </CardContent>        
          
        </CardActionArea>
        <Box sx={{display:'flex',justifyContent: 'end',alignItems: 'start'}}>
        <Checkbox
        sx={{}}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
        />
        </Box>
              
    </Card>
    );
}

export default JobCard;