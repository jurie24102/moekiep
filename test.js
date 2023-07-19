const {
  sendErrorEmail,
  sendSuccessEmail
} = require('./emailSender');

const {
  chromium
} = require('playwright');

async function MobileSite() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {

    await page.goto('https://www.kastelo.co.za/');
    await page.locator('header').getByText('Products').click();
    await page.getByRole('menuitem', {
      name: 'Interest Account'
    }).click();
    await page.locator('div').filter({
      hasText: /^Interest Account$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Start earning daily interest with Kastelo'
    }).click();
    await page.getByRole('link', {
      name: 'Log In'
    }).nth(1).click();
    await page.locator('div').filter({
      hasText: /^Log In$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Log in to your account'
    }).click();

    await page.goBack();

    await page.getByRole('link', {
      name: 'Sign Up'
    }).nth(1).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();

    await page.goBack();

    await page.getByRole('link', {
      name: 'See FAQ'
    }).click();
    await page.locator('div').filter({
      hasText: 'Frequently Asked Questions'
    }).nth(1).click();
    await page.getByRole('heading', {
      name: 'Learn everything you\'ve always wanted to know about Kastelo\'s platform'
    }).click();
    await page.getByRole('button', {
      name: 'How do I become a Kastelo client'
    }).click();
    await page.getByRole('button', {
      name: 'How and when do I receive my algo profit?'
    }).click();
    await page.getByRole('button', {
      name: 'Foreign Exchange',
      exact: true
    }).click();
    await page.getByRole('button', {
      name: 'What is the cost involved?'
    }).click();

    await page.goBack();

    await page.getByRole('link', {
      name: 'Join Now'
    }).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();

    await page.goBack();

    await page.goto('https://www.kastelo.co.za/interest-account/');
    await page.locator('div').filter({
      hasText: /^Sign UpContact us$/
    }).getByRole('link', {
      name: 'Sign Up'
    }).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();

    await page.goBack();

    await page.locator('div').filter({
      hasText: /^Sign UpContact us$/
    }).getByRole('link', {
      name: 'Contact us'
    }).click();
    await page.locator('div').filter({
      hasText: /^Contact Us$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Would you like to find out more about us?'
    }).click();

    await page.goBack();

    await page.locator('header').getByText('Products').click();
    await page.getByRole('menuitem', {
      name: 'Foreign Exchange'
    }).click();
    await page.locator('div').filter({
      hasText: /^Foreign Exchange$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Effortless foreign exchange with Kastelo'
    }).click();
    await page.locator('div').filter({
      hasText: /^Smooth foreign exchange solutions for all\.Log In$/
    }).getByRole('link', {
      name: 'Log In'
    }).click();
    await page.locator('div').filter({
      hasText: /^Log In$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Log in to your account'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/foreign-exchange/');
    await page.locator('div').filter({
      hasText: /^Join Kastelo for smooth foreign exchange solutions and great value\.Sign Up$/
    }).getByRole('link', {
      name: 'Sign Up'
    }).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/foreign-exchange/');
    await page.getByRole('link', {
      name: 'See FAQ'
    }).click();
    await page.locator('div').filter({
      hasText: 'Frequently Asked Questions'
    }).nth(1).click();
    await page.getByRole('heading', {
      name: 'Learn everything you\'ve always wanted to know about Kastelo\'s platform'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/foreign-exchange/');
    await page.getByRole('link', {
      name: 'Join Now'
    }).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/foreign-exchange/');
    await page.locator('div').filter({
      hasText: /^Join Kastelo for smooth foreign exchange solutions and great value\.Sign Up$/
    }).getByRole('link').click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/foreign-exchange/');
    await page.getByRole('link', {
      name: 'Contact Us',
      exact: true
    }).click();
    await page.locator('div').filter({
      hasText: /^Contact Us$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Would you like to find out more about us?'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/foreign-exchange/');
    await page.locator('header').getByText('Products').click();
    await page.getByRole('menuitem', {
      name: 'Algorithmic Trading'
    }).click();
    await page.locator('div').filter({
      hasText: /^Algorithmic Trading$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Welcome to the fastest, easiest way to make money'
    }).click();
    await page.locator('div').filter({
      hasText: /^Access your account and take control of your financial future!Log In$/
    }).getByRole('link', {
      name: 'Log In'
    }).click();
    await page.locator('div').filter({
      hasText: /^Log In$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Log in to your account'
    }).click();

    await page.goBack();

    await page.goto('https://www.kastelo.co.za/algorithmic-trading/');
    await page.locator('div').filter({
      hasText: /^Join now and unlock your path to financial freedom!Sign Up$/
    }).getByRole('link', {
      name: 'Sign Up'
    }).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/algorithmic-trading/');
    await page.getByRole('link', {
      name: 'See FAQ'
    }).click();
    await page.locator('div').filter({
      hasText: 'Frequently Asked Questions'
    }).nth(1).click();
    await page.getByRole('heading', {
      name: 'Learn everything you\'ve always wanted to know about Kastelo\'s platform'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/algorithmic-trading/');
    await page.getByRole('link', {
      name: 'Join Now'
    }).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/algorithmic-trading/');
    await page.locator('div').filter({
      hasText: /^Sign UpContact us$/
    }).getByRole('link', {
      name: 'Sign Up'
    }).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/algorithmic-trading/');
    await page.locator('div').filter({
      hasText: /^Sign UpContact us$/
    }).getByRole('link', {
      name: 'Contact us'
    }).click();
    await page.locator('div').filter({
      hasText: /^Contact Us$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Would you like to find out more about us?'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/algorithmic-trading/');
    await page.locator('header').getByText('Products').click();
    await page.getByRole('menuitem', {
      name: 'Kastelo Cards'
    }).click();
    await page.locator('div').filter({
      hasText: /^Kastelo Cards$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Convenience and control with Kastelo Cards'
    }).click();
    await page.getByRole('link', {
      name: 'Apply Now'
    }).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/cards/');
    await page.getByRole('link', {
      name: 'Sign Up'
    }).nth(1).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/cards/');
    await page.locator('div').filter({
      hasText: /^Sign UpContact us$/
    }).getByRole('link', {
      name: 'Sign Up'
    }).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/cards/');
    await page.locator('div').filter({
      hasText: /^Sign UpContact us$/
    }).getByRole('link', {
      name: 'Contact us'
    }).click();
    await page.locator('div').filter({
      hasText: /^Contact Us$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Would you like to find out more about us?'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/cards/');
    await page.getByRole('link', {
      name: 'Team',
      exact: true
    }).click();
    await page.locator('div').filter({
      hasText: /^Meet The Team$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Meet our trusted experts'
    }).click();
    await page.getByRole('button', {
      name: 'Mark Burke Mark Burke Director Read bio'
    }).click();
    await page.getByRole('paragraph').filter({
      hasText: 'INTERNATIONAL FINANCE GURU • VENTURE CAPITALIST • OVER ACHIEVER'
    }).click();
    await page.getByText('Mark has a PhD from Cambridge University in quantitative economics and econometr').first().click();
    await page.getByRole('button').click();
    await page.getByRole('button', {
      name: 'Ashley David Cocks Ashley David Cocks Project Development Read bio'
    }).click();
    await page.getByRole('paragraph').filter({
      hasText: 'BLOCKCHAIN ENTHUSIAST • FAMILY MAN • TRAIL RUNNER'
    }).click();
    await page.getByRole('paragraph').filter({
      hasText: 'Ashley has a bachelors degree in commerce and 25 years’ experience in business a'
    }).click();
    await page.getByRole('button').click();
    await page.locator('div').filter({
      hasText: /^Sign UpContact us$/
    }).getByRole('link', {
      name: 'Sign Up'
    }).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/meet-the-team/');
    await page.locator('div').filter({
      hasText: /^Sign UpContact us$/
    }).getByRole('link', {
      name: 'Contact us'
    }).click();
    await page.locator('div').filter({
      hasText: /^Contact Us$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Would you like to find out more about us?'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/meet-the-team/');
    await page.getByRole('banner').getByRole('link', {
      name: 'FAQ'
    }).click();
    await page.locator('div').filter({
      hasText: 'Frequently Asked Questions'
    }).nth(1).click();
    await page.getByRole('heading', {
      name: 'Learn everything you\'ve always wanted to know about Kastelo\'s platform'
    }).click();
    await page.getByRole('button', {
      name: 'How do I become a Kastelo client'
    }).click();
    await page.getByRole('button', {
      name: 'How and when do I receive my algo profit?'
    }).click();
    await page.getByRole('button', {
      name: 'Foreign Exchange',
      exact: true
    }).click();
    await page.getByRole('button', {
      name: 'What is the cost involved?'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/meet-the-team/');
    await page.getByRole('banner').getByRole('link', {
      name: 'Log In'
    }).click();
    await page.locator('div').filter({
      hasText: /^Log In$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Log in to your account'
    }).click();
    await page.getByRole('banner').getByRole('link', {
      name: 'Sign Up'
    }).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();
    await page.getByRole('link', {
      name: 'Interest account'
    }).click();
    await page.locator('div').filter({
      hasText: /^Interest Account$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Start earning daily interest with Kastelo'
    }).click();

    await page.goBack();

    await page.getByRole('link', {
      name: 'Foreign exchange'
    }).click();
    await page.locator('div').filter({
      hasText: /^Foreign Exchange$/
    }).first().click();
    await page.getByText('Effortless foreign exchange with KasteloUse Kastelo for all your foreign exchang').click();
    await page.getByRole('heading', {
      name: 'Effortless foreign exchange with Kastelo'
    }).click();
    await page.getByRole('link', {
      name: 'Algorithmic Trading'
    }).click();
    await page.locator('div').filter({
      hasText: /^Algorithmic Trading$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Welcome to the fastest, easiest way to make money'
    }).click();
    await page.getByRole('link', {
      name: 'About us'
    }).click();
    await page.locator('div').filter({
      hasText: 'About Kastelo'
    }).nth(1).click();
    await page.getByRole('heading', {
      name: 'Get to know what makes us tick'
    }).click();
    await page.getByRole('link', {
      name: 'Meet The Team'
    }).first().click();
    await page.locator('div').filter({
      hasText: /^Meet The Team$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Meet our trusted experts'
    }).click();

    await page.goBack();


    await page.goto('https://www.kastelo.co.za/about-us/');
    await page.getByRole('link', {
      name: 'Kastelo Cards'
    }).click();
    await page.locator('div').filter({
      hasText: /^Kastelo Cards$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Convenience and control with Kastelo Cards'
    }).click();

    await page.getByRole('link', {
      name: 'Meet the team'
    }).click();
    await page.locator('div').filter({
      hasText: /^Meet The Team$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Meet our trusted experts'
    }).click();
    await page.getByRole('paragraph').filter({
      hasText: 'Contact us'
    }).getByRole('link', {
      name: 'Contact us'
    }).click();
    await page.locator('div').filter({
      hasText: /^Contact Us$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Would you like to find out more about us?'
    }).click();
    await page.getByRole('paragraph').filter({
      hasText: 'FAQ'
    }).getByRole('link', {
      name: 'FAQ'
    }).click();
    await page.locator('div').filter({
      hasText: 'Frequently Asked Questions'
    }).nth(1).click();
    await page.getByRole('heading', {
      name: 'Learn everything you\'ve always wanted to know about Kastelo\'s platform'
    }).click();
    await page.getByRole('link', {
      name: 'T\'s & C\'s'
    }).click();
    await page.locator('div').filter({
      hasText: 'GENERAL TERMS OF USE'
    }).nth(1).click();
    await page.getByText('NAME', {
      exact: true
    }).click();
    await page.getByText('KASTELO (PTY) LTD (REG: 2020/163836/07)').click();
    await page.getByRole('heading', {
      name: 'IMPORTANT NOTICE'
    }).click();
    await page.getByRole('heading', {
      name: '10 PROHIBITED ACTIVITIES'
    }).click();
    await page.getByRole('link', {
      name: 'Privacy policy'
    }).click();
    await page.locator('div').filter({
      hasText: /^PRIVACY POLICY$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'KASTELO'
    }).click();
    await page.getByRole('heading', {
      name: 'PRELIMINARIES'
    }).click();
    await page.getByRole('heading', {
      name: 'ACCESS AND CORRECTION'
    }).click();
    await page.getByRole('link', {
      name: 'Log In'
    }).nth(1).click();
    await page.locator('div').filter({
      hasText: /^Log In$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Log in to your account'
    }).click();
    await page.getByRole('link', {
      name: 'Sign Up'
    }).nth(1).click();
    await page.locator('div').filter({
      hasText: /^Sign Up$/
    }).first().click();
    await page.getByRole('heading', {
      name: 'Sign up for an account'
    }).click();
    await page.getByRole('link', {
      name: 'Logo and Kastelo'
    }).click();
    await page.getByRole('heading', {
      name: 'Maximize your money with our innovative technology.'
    }).click();

    await sendSuccessEmail("Mobile site crawler");

  } catch (error) {
    await sendErrorEmail(error);
  } finally {
    await browser.close();
  }
}

const interval = 1 * 60 * 1000;
setInterval(MobileSite, interval);

module.exports = MobileSite;