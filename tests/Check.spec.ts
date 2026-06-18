import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {

    await page.goto('https://www.cashify.in');

    await page.getByAltText('Buy Phone').click();

    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for page load
    await page.waitForLoadState('networkidle');

    // Extra wait to observe
    await page.waitForTimeout(5000);

});

test.only('Locato', async ({ page }) => {

    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in").fill("iPhone 14 Pro Max")
    await page.waitForTimeout(2000)

    await page.getByRole('button', {name : 'All'}).click()
   await page.waitForTimeout(2000)

});