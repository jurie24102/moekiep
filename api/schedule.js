// api/schedule.js

const MobileSite = require('./path-to-your-MobileSite'); // Replace with the correct path to your MobileSite function
const { sendSuccessEmail, sendErrorEmail } = require('./path-to-your-emailSender'); // Replace with the correct path to your emailSender.js

async function runMobileSiteAndEmail() {
  try {
    await MobileSite();
    await sendSuccessEmail('Mobile site crawler ran successfully');
  } catch (error) {
    await sendErrorEmail(error);
  }
}

const interval = 1 * 60 * 1000;

module.exports = (req, res) => {
  setInterval(runMobileSiteAndEmail, interval);
  res.status(200).send('Scheduling started.');
};
