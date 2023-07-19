const nodemailer = require('nodemailer');

async function sendErrorEmail(error) {
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
    subject: 'Playwright Script Error',
    text: `An error occurred while running the Playwright script:\n\n${error}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

async function sendSuccessEmail(successful) {
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
      subject: 'Playwright Script Success',
      text: `Playwright script:\n\n${successful} ran a successful test i think`,
    };
  
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

module.exports = { sendErrorEmail, sendSuccessEmail };
