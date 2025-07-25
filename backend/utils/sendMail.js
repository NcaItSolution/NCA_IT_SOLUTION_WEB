const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const sendEmail = async ({ fullName, emailAddress, phoneNumber, coverLetter, resumePath }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from:emailAddress, // Sender email
    to: process.env.SMTP_FROM_EMAIL, // HR email
    subject: 'New Job Application',
    text: `
      A new job application has been submitted.

      Name: ${fullName}
      Email: ${emailAddress}
      Phone: ${phoneNumber}
      Cover Letter: ${coverLetter || 'N/A'}
    `,
    attachments: [
      {
        filename: path.basename(resumePath),
        path: resumePath
      }
    ]
  };

  await transporter.sendMail(mailOptions);

  // Remove the resume file after successful email send
  fs.unlink(resumePath, (err) => {
    // Ignore error if file is already deleted or missing
  });
};

module.exports = sendEmail;
