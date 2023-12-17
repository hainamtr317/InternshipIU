const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const cors = require("cors");
const connectDB = require('./config/config')
const mongoose = require('mongoose')

connectDB()
const port = process.env.PORT || 5001
app.use(express.json())
app.use(cors());
app.use("/api", require("./routes/UserRoute"))
app.use("/api",require('./routes/jobsRoute'))
app.use("/api",require('./routes/CompanyRoute'))
app.use("/api",require('./routes/StudentRoute'))
app.use("/api",require('./routes/TeacherRoute'))

mongoose.connection.once('open',()=>{
    app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})
})
