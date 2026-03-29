import { test, expect } from '@playwright/test';

test("Assertion", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
  await expect(page).toHaveTitle(/nopCommerce/i);
});
