const userSchema = new mongoose.Schema({
    userId:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true 
    }
    ,
    roles:[{
        type:String,
        default:"Student"
    }]
    ,
    confirmed:{
        type: Boolean
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    confirmRegistrationToken: String,
    confirmRegistrationExpire: Date,
    
},{timestamps: true})
module.exports = mongoose.model('user',userSchema)