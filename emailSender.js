const nodemailer = require('nodemailer');

async function sendErrorEmail(taskName, errorMessage, timestamp) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jurie24102@gmail.com',
      pass: 'tnijvrspuyerpesk',
    },
  });

  const mailOptions = {
    from: 'jurie24102@gmail.com',
    to: 'jurie24102@gmail.com',
    subject: `Error: Playwright Script - ${taskName} `,
    text: `An error occurred while running the Playwright script:\n\n${errorMessage}\n\n${timestamp}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Error email sent:', info.response);
  } catch (error) {
    console.error('Error sending error email:', error);
  }
}

async function sendSuccessEmail(taskName, timestamp) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jurie24102@gmail.com',
      pass: 'tnijvrspuyerpesk', 
    },
  });

  const mailOptions = {
    from: 'jurie24102@gmail.com',
    to: 'jurie24102@gmail.com',
    subject: `Success: Playwright Script - ${taskName}`,
    text: `Playwright script - ${taskName} ran a successful test at ${timestamp}.`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Success email sent:', taskName, info.response);
  } catch (error) {
    console.error('Error sending success email:', taskName, error);
  }
}

module.exports = { sendErrorEmail, sendSuccessEmail };
