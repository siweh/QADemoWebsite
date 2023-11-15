import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shop.demoqa.com/shop/');
  await page.getByRole('link', { name: 'U Search' }).click();
  await page.getByRole('searchbox').fill('black lux graphic t-shirt');
  await page.getByRole('searchbox').press('Enter');
});