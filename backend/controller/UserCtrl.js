const JobApplication = require('../models/jobApplication.js');
const sendEmail = require('../utils/sendMail.js')

exports.applyJob = async (req, res) => {
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
    res.status(201).json({ message: 'Application submitted successfully',application });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit application' });
  }
};
