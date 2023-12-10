const mongoose = require('mongoose')

const announcementSchema = mongoose.Schema({
    announcementID:{
        type:String,
        required:true
    },
    announcementText:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('announcement',announcementSchema)