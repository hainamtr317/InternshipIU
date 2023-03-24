import { Container, MenuList, MenuItem, ListItemText, Divider, Paper, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import "./styleleft.scss"
import { Box } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Leftsidecard() {
    const ListMenu = (

        <Container sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            
            <MenuList sx={{width:'400px',height:'auto',marginLeft:'-20px'}}>
                <MenuItem>
                    <ListItemText>Recruitment CV</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText>My Job List</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText>Report forms</ListItemText>
                </MenuItem>
            </MenuList>
        </Container>
    )
    return (

        <Box
            className='boxleft'
            sx={{ 
                 
                 position: { xs: 'relative', md: 'fixed' }
                 ,borderStyle: 'groove'
                 ,border: '2px whitesmoke solid'
                ,boxShadow:'8'
                ,marginBottom:{xs:'30px'}
                ,backgroundColor:'white'
                , height: "auto"
                , width: "225px"
                , display: { xs: 'none', md: 'flex' }
                ,zIndex:"6"
                // , height: { md: 'auto', xs: '250px' }
                // , width: { md: '225px', xs: '448px' }
                // , display: { xs: 'flex', md: 'flex' }
            }}>
            <Container >
                <Paper sx={{
                    display: 'flex',
                    height: '70px',
                    borderStyle: 'groove',
                    border: '2px whitesmoke solid'
                    , borderTopLeftRadius: '17px 18px'
                    , borderTopRightRadius: '17px 18px'
                    , width: { md: '120%', xs: '106%' }
                    , marginLeft: '-20px'
                    , marginTop: '10px'
                    , backgroundImage: 'url(images/card-bg.svg)'
                    , backgroundSize:'cover'
                }}
                    className="bgtag"></Paper>
                <Avatar sx={{ width: 65, height: 65 }} className="avatar" src="" />
                <div className="Userinfor">
                    <a href="/login" className="nameuser">Name of user</a>
                    <a className="linktoaddphoto">addphoto</a>
                    <p className="userdes">Comperter sciences</p>
                </div>
                <Container sx={{ display: { xs: 'none', md: 'block' }, width: '250px', marginLeft: '-40px' }} >
                    <Divider />
                    <MenuList>
                        <MenuItem>
                            <ListItemText>Recruitment CV</ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemText>My Job List</ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemText>Report forms</ListItemText>
                        </MenuItem>
                    </MenuList>
                </Container>
                <Accordion sx={{ display: { xs: 'flex', md: 'none' }
                ,position:'relative' 
                ,marginTop:'0px'
                ,border:'1px solid whitesmoke'
                ,borderRadius:'5%'
                ,height:'auto'
                ,zIndex:"1"
                ,flexDirection:'column'
                ,justifyContent: 'center'
                ,textAlign: 'center'}}>
                    <AccordionSummary 
                    sx={{width:'40%'
                    ,height:'40px'
                    ,justifySelf:'center'
                    ,alignSelf:'center',
                    marginLeft:'10px'}}
                    expandIcon={<ExpandMoreIcon />}
                    >Show more</AccordionSummary>
                    <AccordionDetails sx={{height:'auto'}}>
                        {ListMenu}
                    </AccordionDetails>
                </Accordion>

            </Container>



        </Box>
    );
}

export default Leftsidecard;