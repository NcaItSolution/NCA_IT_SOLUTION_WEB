const express = require('express');
const router = express.Router();

const adminCtrl = require('../controller/adminCtrl');
const multer = require('multer');
const path = require('path');

// Multer config for course image upload
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../upload'));
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	}
});
const upload = multer({ storage });

// Get all certificate requests
router.get('/certificates', adminCtrl.getAllCertificateRequests);


// Upload certificate file for a given enrollment number
router.post('/certificate/upload/:enrollmentNumber', upload.single('certificateFile'), adminCtrl.uploadCertificateFile);

// Fill fields in certificate PDF and generate personalized certificate (admin)
router.post('/certificate/fill/:id', adminCtrl.fillCertificateFields);


// Get all registered students
router.get('/students', adminCtrl.getAllStudents);

// Login admin
router.post('/login', adminCtrl.loginAdmin);

// Create new course (with image upload)
router.post('/course', upload.single('image'), adminCtrl.createCourse);

// Edit course
router.put('/course/:id', adminCtrl.editCourse);

// Delete course
router.delete('/course/:id', adminCtrl.deleteCourse);

// Get all courses
router.get('/courses', adminCtrl.getAllCourses);

module.exports = router;
