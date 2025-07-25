const mongoose=require('mongoose')
const MONGO_URL=process.env.MONGO_URL

const database=()=>{
    mongoose.connect(MONGO_URL)
    .then((conn)=>{
        console.log(`Database connected successfully:${conn.connection.host}`)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

module.exports=database