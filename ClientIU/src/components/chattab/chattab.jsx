import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Avatar, Icon, IconButton } from '@mui/material'

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

import React from 'react';
import './chattab.scss';
import ConnectCard from './connectcard';
function ChatTab() {
  return (
    <Accordion sx={{width: '280px',
    
     display: 'flex', 
     bottom:'0px',
     right:'20px',
     position: 'fixed',
     boxShadow:'9',
     borderTopLeftRadius:'10px',
     borderTopRightRadius:'10px',
     WebkitFlexDirection:'column',
     justifyContent:'center',
     }}>
      <AccordionSummary 
      expandIcon={<ExpandLessIcon />}
      sx={{ height:'30px'
      
      , marginRight: '30px'
      
      }}>
        <Avatar sx={{
        marginRight: '59px',
        marginLeft: '40px'
        }}></Avatar>
        <p className="msg">Messaging</p>
        <div className="list-btn">
          <IconButton size="small">
            <MapsUgcIcon></MapsUgcIcon>
          </IconButton>
        </div>
      </AccordionSummary>
      <AccordionDetails sx={{marginTop:'-100px',display:'flex',flexDirection:'column',justifyContent: 'start',alignItems: 'stretch'}}>
        {Array.from(Array(2)).map((index) => (
          <ConnectCard/>
          
          ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default ChatTab;