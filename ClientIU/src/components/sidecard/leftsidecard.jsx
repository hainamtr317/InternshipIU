import { Container, MenuList,MenuItem,ListItemText,Divider   } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import "./styleleft.scss"
import {Box} from "@mui/material"
function Leftsidecard() {

    return ( 
    
        <Box
        className ='boxleft'  
        sx={{backgroundColor:'white'
        ,height:'500px',width:'225px'
        ,marginTop:'50px'
        ,display: {xs:'none',md:'flex'}
        }}>
            <Container >
            <div className="bgtag"></div>
            <Avatar  sx={{ width: 65, height: 65 }} className="avatar" src="" />
            <div className="Userinfor">
            <a href="http://localhost:5173/login" className="nameuser">Name of user</a>
            <a className="linktoaddphoto">addphoto</a>
            <p className="userdes">Comperter sciences</p>
            </div>
            
            <div className="menu">
            <Divider/>
                <MenuList>
                    <MenuItem>
                    <ListItemText>Recruitment CV</ListItemText>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                    <ListItemText>My Job List</ListItemText>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                    <ListItemText>Report forms</ListItemText>
                    </MenuItem>
                </MenuList>
            </div>

            
            </Container>
           
       
        </Box>
    );
}

export default Leftsidecard;