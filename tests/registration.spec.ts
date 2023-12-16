import { test, expect } from '@playwright/test';
import { log } from 'console';

test.beforeEach(async ({ page }) => {
  await page.goto('https://shop.demoqa.com/shop/');
  await page.getByText('Dismiss').click();
});

test('Get the title', async({page}) => {
  await expect(page).toHaveTitle('Shop – ToolsQA Demo Site');
});


// test('Dismiss hyperlink', async({page}) => {
//   await page.getByText('Dismiss').click();
// });


test('My Account page with valid password Registration', async({ page }) => {
  await page.getByRole('link', { name: 'My Account'}).click();

  //Registration
  await page.locator('#reg_username').fill('pearl');
  await page.locator('#reg_email').fill('pearl@gmail.com');
  await page.locator("[id='reg_password']").fill('P@ssw0rd');
  // get the value of the password input
  const password = await page.$eval("[id='reg_password']", el => el.value); 
  console.log(password);
  
  // define the regex 
  const regex = /^(?=.*[!@#$%^&*])(?=.*[0-9]).+$/; 

  // await page.locator('.show-password-input').click();
  await page.getByRole('button', { name: 'Register'}).click();

  if (password.match(regex)) {
    console.log("Valid password");
    await expect(page).toHaveURL('https://shop.demoqa.com/my-account/');
  } else {
    console.log("Invalid username or password");
  }

});

test('Empty email input field', async({ page }) => {
  await page.getByRole('link', { name: 'My Account'}).click();
  await page.locator('#reg_username').fill('pearl');
  await page.locator('#reg_email').fill('');
  await page.locator("[id='reg_password']").fill('Pearl@1234#');
 
  await page.getByRole('button', { name: 'Register'}).click();
  // Locate the <li> element
const liErrorMessage = page.locator('.woocommerce-error');

// Get the text content of the element
const errorMessage = await liErrorMessage.innerText();

// Remove any extra whitespace
const trimmedMessage = errorMessage.trim();

// Do something with the error message
console.log(trimmedMessage);
  await expect(liErrorMessage).toContainText('Error: Please provide a valid email address.');
});

test('Empty username input field', async({ page }) => {
  await page.getByRole('link', { name: 'My Account'}).click();
  await page.locator('#reg_username').fill('');
  await page.locator('#reg_email').fill('brat@gmail.com');
  await page.locator("[id='reg_password']").fill('Abcde@12345#');
 
  await page.getByRole('button', { name: 'Register'}).click();
  // Locate the <li> element
const liErrorMessage = page.locator('.woocommerce-error');

// Get the text content of the element
const errorMessage = await liErrorMessage.innerText();

// Remove any extra whitespace
const trimmedMessage = errorMessage.trim();

// Do something with the error message
console.log(trimmedMessage);
  await expect(liErrorMessage).toContainText('Error:  Please enter a valid account username.');
});

test('Empty password input field', async({ page }) => {
  await page.getByRole('link', { name: 'My Account'}).click();
  await page.locator('#reg_username').fill('brat');
  await page.locator('#reg_email').fill('brat@gmail.com');
  await page.locator("[id='reg_password']").fill('');
 
  await page.getByRole('button', { name: 'Register'}).click();
  // Locate the <li> element
const liErrorMessage = page.locator('.woocommerce-error');

// Get the text content of the element
const errorMessage = await liErrorMessage.innerText();

// Remove any extra whitespace
const trimmedMessage = errorMessage.trim();

// Do something with the error message
console.log(trimmedMessage);
  await expect(liErrorMessage).toContainText('Error: Please enter an account password.');
});

test('My Account page with invalid password registration', async({ page }) => {
  await page.getByRole('link', { name: 'My Account'}).click();

  //Registration
  await page.locator('#reg_username').fill('paul');
  await page.locator('#reg_email').fill('paul@gmail.com');
  await page.locator("[id='reg_password']").fill('Password');
  // get the value of the password input
  const password = await page.$eval("[id='reg_password']", el => el.value); 
  console.log(password);
  
  // define the regex 
  const regex = /^(?=.*[!@#$%^&*])(?=.*[0-9]).+$/; 
   
  // await page.locator('.show-password-input').click();
  await page.getByRole('button', { name: 'Register'}).click();

  if (password.match(regex)) {
    console.log("Valid password");
    await expect(page).toHaveURL('https://shop.demoqa.com/my-account/');
  } else {
    console.log("Invalid username or password");
  }

});



