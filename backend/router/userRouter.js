const express=require('express')
const userRouter=express.Router()
const {
	applyJob,
	sendMessageCtrl,
	registerStudent,
	getAllCourses,
	requestCertificate,
	getCertificate,
    getCourseByName
} = require('../controller/UserCtrl.js');
const upload=require('../middleware/multerMIddleware.js')



userRouter.post('/apply-job', upload.single('resume'), applyJob);
userRouter.post('/send-message', sendMessageCtrl);

// Register student
userRouter.post('/register-student', registerStudent);

// Get all courses
userRouter.get('/courses', getAllCourses);


// get course by detail
userRouter.get('/course/:name', getCourseByName);

// Request certificate
userRouter.post('/certificate-request', requestCertificate);

// Get certificate by enrollment number (download if available)
userRouter.get('/certificate/:enrollmentNumber', getCertificate);

module.exports=userRouter