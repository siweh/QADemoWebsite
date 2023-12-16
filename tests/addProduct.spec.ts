import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://shop.demoqa.com/shop/');
    await page.getByText('Dismiss').click();
  });

  test('Add product to cart', async({page}) => {
    await page.getByRole('heading', { name: 'black lux graphic t-shirt'}).click();
    await page.getByLabel('Color').selectOption('black');
    await page.getByLabel('Size', { exact: true }).selectOption('34');
    // await page.locator('.qty-increase').click();
    await page.getByRole('button', { name: 'L' }).click();
    await page.getByRole('button', { name: 'Add to cart' }).click();
    await page.getByRole('link', { name: 'View cart' }).click();
  });