const mongoose = require('mongoose')

const announcementSchema = mongoose.Schema({
    whoSend:{
        type:String,
        required:true
    },
    announcementContent:{
        type:String,
        required:true
    },
    announcementLink:String



},{timestamps: true})

module.exports = mongoose.model('announcement',announcementSchema)
module.exports = {announcementSchema}