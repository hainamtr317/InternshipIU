import  React from 'react';
import Header from "../../components/header/Header";
import Leftsidecard from "../../components/sidecard/leftsidecard";
import MainLayout from "../../components/mainlayout/mainlayout.jsx"
import { Grid } from '@mui/material';

import './home.scss'
const Home =()=>{

    return (
        <body  >
            <Header/>
            <Grid container spacing={3} className='main'>
            <Grid xs>
            <Leftsidecard/>
            </Grid>
            <Grid xs={6}>
            <MainLayout/>
            </Grid>
            
            </Grid>
            
        </body>
    )
}
export default Home