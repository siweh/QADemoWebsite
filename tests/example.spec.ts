import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://shop.demoqa.com/shop/');
});

test('Get the title', async({page}) => {
  await expect(page).toHaveTitle('Shop – ToolsQA Demo Site');
});


test('Dismiss hyperlink', async({page}) => {
  await page.getByText('Dismiss').click();
});

test('Serach for product', async({page}) => {
  await page.getByRole('link', { name: 'U Search'}).click();
  const searchItem = await page.getByRole('searchbox');
  await searchItem.fill('black lux graphic t-shirt');
  await searchItem.press('Enter');
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
