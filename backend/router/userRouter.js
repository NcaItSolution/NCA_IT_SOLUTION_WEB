const express=require('express')
const userRouter=express.Router()
const { applyJob }=require('../controller/UserCtrl.js')
const upload=require('../middleware/multerMIddleware.js')


userRouter.post('/apply-job',upload.single('resume'),applyJob)

module.exports=userRouter