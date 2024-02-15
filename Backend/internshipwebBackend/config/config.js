const mongoose = require('mongoose')


const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("connect DB success")
    }catch(err){
        console.log(err)
    }
}
module.exports = connectDB