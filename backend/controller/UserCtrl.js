const JobApplication = require('../models/jobApplication.js');
const sendEmail = require('../utils/sendMail.js')
const userSchema = require('../models/userSchema.js');
const sendEmail2 = require('../utils/sendMail2.js');

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

module.exports = { applyJob,sendMessageCtrl }


