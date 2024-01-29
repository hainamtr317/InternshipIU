const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const https = require("https");
const fs = require("fs");
const PORT = 4000;
app.use(express.json());
app.use(cors());

// add key
const options = {
  key: fs.readFileSync("./config/cert.key"),
  cert: fs.readFileSync("./config/cert.crt"),
};

app.use("/", express.static("public"));
//set upload destination for images
const storageImages = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const uploadImage = multer({ storage: storageImages });
// set upload destination for Cv
const storageCvs = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "UserCv");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});
const uploadCv = multer({ storage: storageCvs });

// set upload destination for Cv
const storageReport = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Reports");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});
const uploadReport = multer({ storage: storageReport });

// router to get upload image
app.post("/uploadImage", uploadImage.single("image"), (req, res) => {
  try {
    return res.status(200).json({
      img: `http://localhost:4000/display/images/${req.file.filename}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
app.post("/uploadCv", uploadCv.single("userCv"), (req, res) => {
  var extension = path.extname(req.file.filename);
  var NameFile = path.basename(req.file.filename, extension);
  return res.status(200).json({
    Cv: `https://localhost:4443/display/UsersCv/${req.file.filename}`,
    NameCV: NameFile,
  });
});

app.post("/uploadReport", uploadReport.single("Report"), (req, res) => {
  var extension = path.extname(req.file.filename);
  var NameFile = path.basename(req.file.filename, extension);
  return res.status(200).json({
    Cv: `https://localhost:4443/display/UsersReport/${req.file.filename}`,
    NameRP: NameFile,
  });
});

// open for cline can access the files
app.use("/display/images", express.static("Images"));
app.use("/display/UsersCv", express.static("UserCv"));
app.use("/display/UsersReport", express.static("Reports"));

app.listen(PORT, () => {
  console.log("server images and files on port", PORT);
});

// Create the https server by initializing it with 'options'
// -------------------- STEP 3
https.createServer(options, app).listen(4443, () => {
  console.log(`HTTPS server started on port 4443`);
});
