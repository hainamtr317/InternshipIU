import  React from 'react';
import Header from "../../components/header/Header";
import Leftside from "../../components/leftside/leftside";
import MainLayout from "../../components/mainlayout/mainlayout.jsx"
import { Grid } from '@mui/material';
import Rightside from "../../components/rightside/rightside"
import ChatTab from "../../components/chattab/chattab"

import './home.scss'
const Home =()=>{

    return (
        <div>
            <Header/>
            <Grid container spacing={4} className='main'>
            <Grid sm>
            <Leftside/>
            </Grid>
            <Grid sm={8}>
            <MainLayout/>
            </Grid>
            <Grid sm>
            <Rightside/>
            </Grid>
            </Grid>
            <ChatTab/>
        </div>
    )
}
export default Home