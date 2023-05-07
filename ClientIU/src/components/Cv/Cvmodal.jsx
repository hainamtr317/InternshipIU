import { Modal, Box } from "@mui/material";
import React from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
function CvModal(props) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
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
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
            <div
              style={{
                height: "100%",
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Viewer
                fileUrl={`/Assets/MyCv${props.CvNumber}.pdf`}
                plugins={[defaultLayoutPluginInstance]}
              />
            </div>
          </Worker>
        </Box>
      </Modal>
    </>
  );
}

export default CvModal;
