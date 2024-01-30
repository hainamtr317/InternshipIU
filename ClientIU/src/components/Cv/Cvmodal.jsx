import { Modal, Box } from "@mui/material";
import React from "react";
function CvModal(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    height: "850px",
    bgcolor: "white",
    border: "2px solid whitesmoke",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Modal
        open={props.Open}
        onClose={props.Close}
        aria-labelledby="modal-Cv"
        aria-describedby="modal-modal-display-Cv"
      >
        <Box sx={style}>
          <object
            data={props.dataFiles}
            type="application/pdf"
            width="100%"
            height="800px"
          >
            <p>
              Unable to display PDF file. <a href={props.dataFiles}>Download</a>{" "}
              instead.
            </p>
          </object>
        </Box>
      </Modal>
    </>
  );
}

export default CvModal;
