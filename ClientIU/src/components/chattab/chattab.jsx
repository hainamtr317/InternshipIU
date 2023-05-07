import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Avatar, Icon, IconButton } from '@mui/material'

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

import React from 'react';
import './chattab.scss';
import ConnectCard from './connectcard';
function ChatTab() {
  return (
    <>
    <Accordion
      disableGutters='true' 
     sx={{width: '280px',
     display: 'flex', 
     bottom:'0px',
     right:'20px',
     position: 'fixed',
     borderStyle: 'groove'
    ,border: '2px whitesmoke solid'
    ,boxShadow:'8',
     borderTopLeftRadius:'10px',
     borderTopRightRadius:'10px',
     flexDirection: 'column',
     justifyContent:'center',
     }}>
      <AccordionSummary 
      expandIcon={<ExpandLessIcon />}
      sx={{ height:'40px',
      
      }}>
        <div className="logo-msg">
        <Avatar sx={{
          margin:'0px 10px 0px -10px'
        }}></Avatar>
        <p className="msg">Messaging</p>
        </div>
        <div className="list-btn">
          <IconButton size="small" sx={{height:'40px',width:'40px',position:'relative',margin:'10px -20px 0px 148px'}}>
            <MapsUgcIcon fontSize='small'></MapsUgcIcon>
          </IconButton>
        </div>
      </AccordionSummary>
      <AccordionDetails sx={{
        display:'flex'
      ,flexDirection:'Column'
      
      }}>
        {Array.from(Array(5)).map((index) => (
          <ConnectCard/>
          ))}
      </AccordionDetails>
    </Accordion>
    </>
  );
}

export default ChatTab;