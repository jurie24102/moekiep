
const { sendErrorEmail, sendSuccessEmail } = require('../emailSender.js');
const { chromium } = require('playwright');

async function MobileAccountArea() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const timestamp = new Date().toString();


  try {

  await page.goto('https://www.kastelo.co.za/');
    

  await page.getByRole('banner').getByRole('button').click();
  await page.getByRole('link', { name: 'Log In' }).click();

  await page.locator('input[name="username"]').fill('test-login-user');
  await page.locator('input[name="password"]').fill('vz$hbZBYF9r9');
  await page.locator('text=Sign In').click();

  await page.getByRole('link', { name: 'ZAR 0.00 0.00 ZAR Value' }).click();
  await page.getByText('ZAR Account').click();
  await page.getByText('0.00 ZAR').click();
  await page.locator('div').filter({ hasText: /^Deposit$/ }).getByRole('button').click();
  await page.getByRole('heading', { name: 'Deposit Cash' }).click();
  await page.getByRole('button', { name: 'Close' }).nth(0).click();
  await page.locator('div').filter({ hasText: /^Exchange$/ }).getByRole('link').click();
  await page.getByTestId('KeyboardArrowDownIcon').first().click();
  await page.getByText('USDC').click();
  await page.getByTestId('KeyboardArrowDownIcon').nth(1).click();
  await page.getByText('ZAR').click();
  await page.getByRole('heading', { name: 'Exchange' }).click();

  await page.locator('[id="__next"] div').getByRole('link').first().click();

  await page.getByRole('link', { name: 'USDC' }).click();
  await page.getByText('USDC Account').click();
  await page.getByText('0.00 USDC').click();
  await page.locator('div').filter({ hasText: /^Exchange$/ }).getByRole('link').click();
  await page.getByRole('heading', { name: 'Exchange' }).click();

  await page.locator('[id="__next"] div').getByRole('link').first().click();

  await page.getByRole('link', { name: 'BTC' }).click();
  await page.getByText('BTC Account').click();
  await page.getByText('0.00000000 BTC').click();
  await page.locator('div').filter({ hasText: /^Withdraw$/ }).getByRole('button').click();
  await page.getByRole('heading', { name: 'Add BTC Withdrawal Address' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.locator('div').filter({ hasText: /^Exchange$/ }).click();

  await page.locator('[id="__next"] div').getByRole('link').first().click();

  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'USDC 0.00 0.00 ZAR Value' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'BTC 0.00000000 0.00 ZAR Value' }).click();
  await page.getByRole('link', { name: 'Home' }).click();

  await page.locator('[id="__next"] div').getByRole('link').first().click();

  await page.getByRole('button', { name: 'Personal Info Personal Information' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Personal Information' }).click();
  await page.getByRole('button', { name: 'Change Email' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.locator('div').filter({ hasText: /^Personal Information$/ }).getByRole('button').click();
  await page.getByRole('button', { name: 'Personal Info Kastelo Card' }).click();
  await page.getByText('Get Your Kastelo Card').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Personal Info Help' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Help' }).click();
  await page.getByRole('button', { name: 'Personal Info FAQ' }).click();
  await page.getByRole('heading', { name: 'Frequently Asked Questions' }).click();
  await page.getByRole('heading', { name: 'Learn everything you\'ve always wanted to know about Kastelo\'s platform' }).click();
  await page.getByRole('link', { name: 'Logo and Kastelo' }).click();

  await page.goto('https://www.kastelo.co.za/faq/');

  await page.goto('https://www.kastelo.co.za/dash/profile-settings/');

  await page.getByRole('link', { name: 'Make Money' }).click();
  await page.getByRole('link', { name: 'ZAR Interest KCT APR 7.05 %' }).click();
  await page.getByRole('heading', { name: 'ZAR Interest' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('heading', { name: 'Insufficient Balance' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('link', { name: 'Make Money' }).click();
  await page.getByRole('button').first().click();
  await page.getByRole('link', { name: 'Home' }).click();

  await page.locator('[id="__next"] div').getByRole('link').first().click();

  await page.getByRole('button', { name: 'Personal Info Logout' }).click();
    await sendSuccessEmail("Mobile Account Area", timestamp);

  } catch (error) {
    await sendErrorEmail("Mobile Account Area", error, timestamp);
  } finally {
    await browser.close();
  }
}

const interval = 1 * 60 * 1000;
setInterval(MobileAccountArea, interval);

module.exports = MobileAccountArea;