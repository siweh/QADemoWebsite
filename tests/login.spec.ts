import { test, expect } from '@playwright/test';
import { log } from 'console';

test.beforeEach(async ({ page }) => {
    await page.goto('https://shop.demoqa.com/shop/');
    await page.getByText('Dismiss').click();
    await page.getByRole('link', { name: 'My Account'}).click();
  });

  test('Valid login', async({ page }) => {
    await page.locator('#username').fill('pearl');
    await page.locator('#password').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Log in'}).click();
  });


  test('Invalid username login', async({ page }) => {
    await page.locator('#username').fill('12345');
    await page.locator('#password').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Log in'}).click();

    const username = await page.$eval("[id='username']", el => el.value);
    console.log(username);

    // define the regex 
    const regex = /^(?=.*[!@#$%^&*]).+$/; 

    if(username.match(regex)){
        console.log("Valid password");
        await expect(page).toHaveURL('https://shop.demoqa.com/my-account/');
    }else{
        console.log('The username or password you entered is incorrect. Lost your password?');
    }
  });

  test('lost password link', async({ page }) => {
    const textLocator = await page.getByRole('list', { name: });
  });