import { Box, Card, CardActionArea, CardMedia } from '@mui/material';
import React from 'react';
function CompanyCard() {
    return ( <>
    <Box>
        <Card>
            <CardActionArea
            sx={{
                display:'flex',
                flexDirection:'row',
    

            }}>
                <CardMedia
                sx={{
                    heigth:'70px',width:'70px'
                }}
                component='img'
                image={Job.image}
                alt="false to load image"
                >
                </CardMedia>
                <Typography
                variant="p"
                sx={{
                  marginLeft: "-12px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "medium",
                  fontWeight: "bold",
                  color: "#1976d2",
                }}
                >
                {Job.company}
                </Typography>
                <Typography
                variant="caption"
                sx={{
                  marginLeft: "-12px",
                  fontWeight: "bold",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                Company desiber
              </Typography>
            </CardActionArea>
        </Card>
    </Box>
    </> );
}

export default CompanyCard;