const mongoose=require('mongoose')
const {Schema}=mongoose

const jobApplication=new Schema({
    fullName:{
        type:String,
        required:true
    },
    emailAddress:{
        type:String,
        requierd:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    resume:{
        type:String,
        required:true
    },
    coverLetter:{
        type:String
    }
},{timestamps:true})



module.exports=mongoose.model('Application',jobApplication)

