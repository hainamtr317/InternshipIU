import { Box ,ThemeProvider, createTheme} from '@mui/material';
import './left.scss';
import Leftsidecard from './leftsidecard'
import * as React from 'react';
import { useEffect,useState  } from "react";
function Leftside() {
    return (    
    <div className="left">
    <Leftsidecard/>
    </div> );
}

export default Leftside;