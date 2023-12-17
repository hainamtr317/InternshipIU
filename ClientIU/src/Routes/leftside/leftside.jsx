import { Box ,ThemeProvider, createTheme} from '@mui/material';
import './left.scss';
import Leftsidecard from './leftsidecard'
import * as React from 'react';
import { useEffect,useState  } from "react";
function Leftside(props) {
    console.log(props)
    return (    
    <div className="left">
    <Leftsidecard userData={props.userData}/>
    </div> );
}

export default Leftside;