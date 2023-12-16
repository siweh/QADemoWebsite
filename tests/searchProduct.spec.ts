import { test, expect } from '@playwright/test';

test('Serach for product', async({page}) => {
    await page.getByRole('link', { name: 'U Search'}).click();
    const searchItem = await page.getByRole('searchbox');
    await searchItem.fill('black lux graphic t-shirt');
    await searchItem.press('Enter');
  });
  