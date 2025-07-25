const nodemailer = require('nodemailer');

const sendEmail2 = async ({ fullName, emailAddress, subject, message }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from:`"${fullName}" <${process.env.SMTP_FROM_EMAIL}>`, // ✅ Your verified sender email
    to:process.env.SMTP_FROM_EMAIL, // ✅ Where you want to receive this
    replyTo: emailAddress, // ✅ So you can reply to the user directly
    subject: subject,
    html: `
      <h3>New Message Received</h3>
      <p><strong>From:</strong> ${fullName} (${emailAddress})</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail2;
