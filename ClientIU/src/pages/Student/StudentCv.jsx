import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Document, Page} from "react-pdf/dist/esm/entry.vite";

const StudentCv = () => {
   
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
      <Typography
      sx={{
        color: '#1976d2'
        ,marginLeft:'20px'
        ,marginTop:'20px'
      }}
      variant="h3">
       <b>
        Your Cv
        </b> 
      </Typography>
      <hr></hr>
      <Document file="./MyCv.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      
      </>
    
  
  );
};

export default StudentCv;
