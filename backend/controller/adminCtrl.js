const Student = require('../models/StudentModel');
const generateCertificatePdf = require('../utils/generateCertificatePdf');
// Get all registered students
exports.getAllStudents = async (req, res) => {
	try {
		const students = await Student.find();
		res.status(200).json(students);
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
};
const Certificate = require('../models/CertificateModel');

const Admin = require('../models/AdminModel');
const bcrypt = require('bcryptjs');

const Course = require('../models/CourseModel');


// Get all certificate requests
exports.getAllCertificateRequests = async (req, res) => {
	try {
		const certificates = await Certificate.find();
		res.status(200).json(certificates);
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
};

// Upload and edit certificate fields for a given enrollment number

exports.uploadCertificateFile = async (req, res) => {
	try {
		const { enrollmentNumber } = req.params;
		const { fullName, email, newEnrollmentNumber, subject, from, to } = req.body;
		const certificate = await Certificate.findOne({ enrollmentNumber });
		if (!certificate) {
			return res.status(404).json({ message: 'Certificate request not found.' });
		}
		// Update fields if provided
		if (fullName) certificate.fullName = fullName;
		if (email) certificate.email = email;
		if (newEnrollmentNumber) certificate.enrollmentNumber = newEnrollmentNumber;
		if (subject) certificate.subject = subject;
		if (from) certificate.from = from;
		if (to) certificate.to = to;
		if (req.file) certificate.certificateFile = req.file.filename;
		await certificate.save();
		res.status(200).json({ message: 'Certificate updated and uploaded successfully.', certificate });
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
};





// Login admin
exports.loginAdmin = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ message: 'Email and password are required.' });
		}
		const admin = await Admin.findOne({ email });
		if (!admin) {
			return res.status(401).json({ message: 'Invalid credentials.' });
		}
		const isMatch = await bcrypt.compare(password, admin.password);
		if (!isMatch) {
			return res.status(401).json({ message: 'Invalid credentials.' });
		}
		res.status(200).json({ message: 'Login successful.' });
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
};

// Admin: Fill certificate fields in template and save personalized PDF
const path = require('path');
exports.fillCertificateFields = async (req, res) => {
	try {
		const { id } = req.params;
		const { fullName, subject, from, to, enrollmentId, type } = req.body;
		// Find the certificate request
		const cert = await Certificate.findById(id);
		if (!cert) return res.status(404).json({ message: 'Certificate request not found' });

		// Path to template and output
		const templatePath = path.join(__dirname, '../upload/internship_certificate.pdf');
		const outputFileName = `${id}_${Date.now()}_certificate.pdf`;
		const outputPath = path.join(__dirname, '../upload/', outputFileName);

		// Generate personalized PDF with all fields
		await generateCertificatePdf({
			fullName,
			subject,
			from,
			to,
			enrollmentId: enrollmentId || cert.enrollmentNumber || '',
			type: type || cert.type || 'Internship'
		}, templatePath, outputPath);

		// Update certificate record with new file and fields
		cert.fullName = fullName;
		cert.subject = subject;
		cert.from = from;
		cert.to = to;
		cert.certificateFile = outputFileName;
		cert.enrollmentNumber = enrollmentId || cert.enrollmentNumber;
		cert.type = type || cert.type;
		await cert.save();

		res.json({ message: 'Certificate generated and fields updated', file: outputFileName });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Error generating certificate PDF' });
	}
};



// Create new course with image upload
exports.createCourse = async (req, res) => {
	try {
		const { title, duration, cost, syllabus } = req.body;
		if (!title || !duration || !cost || !syllabus || !req.file) {
			return res.status(400).json({ message: 'All fields and image are required.' });
		}
		const image = req.file.filename;
		const newCourse = new Course({ title, duration, cost, image, syllabus });
		await newCourse.save();
		res.status(201).json({ message: 'Course created successfully.' });
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
};

// Edit course
exports.editCourse = async (req, res) => {
	try {
		const { id } = req.params;
		const updates = req.body;
		const updatedCourse = await Course.findByIdAndUpdate(id, updates, { new: true });
		if (!updatedCourse) {
			return res.status(404).json({ message: 'Course not found.' });
		}
		res.status(200).json({ message: 'Course updated successfully.', course: updatedCourse });
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
};

// Delete course
exports.deleteCourse = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedCourse = await Course.findByIdAndDelete(id);
		if (!deletedCourse) {
			return res.status(404).json({ message: 'Course not found.' });
		}
		res.status(200).json({ message: 'Course deleted successfully.' });
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
};

// Get all courses
exports.getAllCourses = async (req, res) => {
	try {
		const courses = await Course.find();
		res.status(200).json(courses);
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
};
