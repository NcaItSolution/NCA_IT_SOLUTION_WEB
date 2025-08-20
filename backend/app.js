const express=require('express')
const app=express()
require('dotenv').config()
const cors = require('cors')
const database=require('./utils/Database.js')

const userRouter=require('./router/userRouter.js')
const adminRouter=require('./router/adminRouter.js')

database()

app.use(cors())
app.use(express.json())
// Serve uploaded images statically
app.use('/upload', express.static('upload'))

app.use('/api/user',userRouter)
app.use('/api/admin', adminRouter)
app.use('/',(req,res)=>{
    res.send('hwllo world')
})

module.exports=app