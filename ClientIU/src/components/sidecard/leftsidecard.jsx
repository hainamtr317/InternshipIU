import { Box } from "@mui/material";

function Leftsidecard() {

    return ( 
    
        <Box  
        sx={{backgroundColor:'blueviolet'
        ,height:'450px',width:'280px'
        ,position:'relative'
        ,marginTop:'50px'
        ,marginleft:'50px'
        ,display: {xs:'none',md:'flex'}}}>
         <h4>This is side left</h4> 
        </Box>
    );
}

export default Leftsidecard;