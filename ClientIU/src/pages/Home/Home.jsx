import  React from 'react';
import Header from "../../components/header/Header";
import Leftsidecard from "../../components/leftside/leftsidecard.jsx";
import MainLayout from "../../components/mainlayout/mainlayout.jsx"
import { Grid } from '@mui/material';
import Rightside from "../../components/rightside/rightside"
import './home.scss'
const Home =()=>{

    return (
        <div>
            <Header/>

            {/* <Grid container spacing={3} className='main'>
            <Grid sm>
            <Leftsidecard/>
            </Grid>
            <Grid sm={6}>
            <MainLayout/>
            </Grid>
            <Grid sm>
            <Rightside/>
            </Grid>
            </Grid> */}
            
        </div>
    )
}
export default Home