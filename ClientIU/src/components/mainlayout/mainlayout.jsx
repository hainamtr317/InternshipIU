
import * as React from 'react';
import JobCard from "../menu/Jobcard";
import './mainlyout.scss';
import { Grid } from "@mui/material"

function MainLayout() {

    return (
        <div className="MainLayout">
             <Grid container >
                {Array.from(Array(10)).map((_, index) => (
                    <Grid sx={{display:'flex',justifyContent: 'center',alignItems: 'start'}}
                     xs={12} sm={6} lg={3} key={index}>
                        <JobCard />
                    </Grid>
                ))}
            </Grid>
               
        </div>);
}

export default MainLayout;