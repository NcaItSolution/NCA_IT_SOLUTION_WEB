const mongoose=require('mongoose')
const {Schema}=mongoose

const userSchema=new Schema({
    fullName:{
        type:String
    },
    emailAddress:{
        type:String,
        required:true    
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('user',userSchema)