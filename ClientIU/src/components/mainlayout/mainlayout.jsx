
import * as React from 'react';
import JobCard from "../Job/Jobcard";
import './mainlyout.scss';
import { Grid } from "@mui/material"

function MainLayout() {

    return (
        <div className="MainLayout">
             <Grid container >
                {Array.from(Array(10)).map((_, index) => (
                    <Grid sx={{display:'flex',justifyContent: 'center',alignItems: 'start'}}
                     xs={12} md={6} xl={3} key={index}>
                        <JobCard />
                    </Grid>
                ))}
            </Grid>
               
        </div>);
}

export default MainLayout;