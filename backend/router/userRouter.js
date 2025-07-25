const express=require('express')
const userRouter=express.Router()
const { applyJob, sendMessageCtrl }=require('../controller/UserCtrl.js')
const upload=require('../middleware/multerMIddleware.js')


userRouter.post('/apply-job',upload.single('resume'),applyJob)
userRouter.post('/send-message',sendMessageCtrl)

module.exports=userRouter