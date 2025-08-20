const JobApplication = require('../models/jobApplication.js');
const sendEmail = require('../utils/sendMail.js')
const userSchema = require('../models/userSchema.js');
const sendEmail2 = require('../utils/sendMail2.js');
const Student = require('../models/StudentModel');
const Course = require('../models/CourseModel');
const Certificate = require('../models/CertificateModel');
// Get certificate by enrollment number (returns certificate file if available)
const path = require('path');
const fs = require('fs');


const applyJob = async (req, res) => {
  try {
    const { fullName, emailAddress, phoneNumber, coverLetter } = req.body;
    const resumePath = req.file.path;

    const application = new JobApplication({
      fullName,
      emailAddress,
      phoneNumber,
      resume: resumePath,
      coverLetter
    });

    await application.save();
    await sendEmail({ fullName, emailAddress, phoneNumber, coverLetter, resumePath })
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit application' });
  }
}

const sendMessageCtrl = async (req, res) => {
  const { fullName, emailAddress, subject, message } = req.body

  try {
    const userMessage = userSchema({
      fullName,
      emailAddress,
      subject,
      message
    })

    await userMessage.save()
    res.status(201).json({ message: 'Message sent successfully' })
    await sendEmail2({fullName, emailAddress, subject, message})
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit application' });
  }
}


// Register student
const registerStudent = async (req, res) => {
  try {
    const { fullName, contactNumber, email, qualification, gender, course, address } = req.body;
    if (!fullName || !contactNumber || !email || !qualification || !gender || !course || !address) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const newStudent = new Student({ fullName, contactNumber, email, qualification, gender, course, address });
    await newStudent.save();
    res.status(201).json({ message: 'Student registered successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Post request for certificate
const requestCertificate = async (req, res) => {
  try {
    const { fullName, email, enrollmentNumber } = req.body;
    if (!fullName || !email || !enrollmentNumber) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const newCertificate = new Certificate({ fullName, email, enrollmentNumber });
    await newCertificate.save();
    res.status(201).json({ message: 'Certificate request submitted.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};



const getCertificate = async (req, res) => {
  try {
    // Allow CORS for download route
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Expose-Headers', 'Content-Disposition');
    const { enrollmentNumber } = req.params;
    const certificate = await Certificate.findOne({ enrollmentNumber });
    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found.' });
    }
    if (certificate.certificateFile) {
      // Send the file for download
      const filePath = path.join(__dirname, '../upload', certificate.certificateFile);
      if (fs.existsSync(filePath)) {
        // Set Content-Disposition header manually for CORS
        const fileName = certificate.certificateFile || `certificate_${enrollmentNumber}.pdf`;
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        // Set MIME type for PDF (or fallback to octet-stream)
        const ext = path.extname(fileName).toLowerCase();
        if (ext === '.pdf') {
          res.setHeader('Content-Type', 'application/pdf');
        } else {
          res.setHeader('Content-Type', 'application/octet-stream');
        }
        return res.sendFile(filePath);
      } else {
        return res.status(404).json({ message: 'Certificate file not found.' });
      }
    }
    // If no file uploaded yet, return certificate request info
    res.status(200).json({
      message: 'Certificate file not uploaded yet.',
      certificate
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get course detail by course name (slug)
const getCourseByName = async (req, res) => {
  try {
    const { name } = req.params;
    // Case-insensitive search for course title
    const course = await Course.findOne({ title: { $regex: `^${name}$`, $options: 'i' } });
    if (!course) {
      return res.status(404).json({ message: 'Course not found.' });
    }
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


module.exports = {
  applyJob,
  sendMessageCtrl,
  registerStudent,
  getAllCourses,
  requestCertificate,
  getCertificate
  ,getCourseByName
};