import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shop.demoqa.com/shop/');
  await page.getByRole('link', { name: 'black lux graphic t-shirt', exact: true }).click();
  await page.getByLabel('Color').selectOption('black');
  await page.getByLabel('Size', { exact: true }).selectOption('34');
  await page.locator('.qty-increase').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'View cart' }).click();
});