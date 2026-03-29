import { test, expect } from '@playwright/test';

test("Assertion", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

  //1) To validate url of page/ page have url:
  await expect (page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F")

  //2) Page has title :
  await expect (page).toHaveTitle('nopCommerce demo store. Register')
  
  //3) Locator to be visible :
  const element = await page.locator(".header-logo")
  await expect(element).toBeVisible;

  //4) Control is enabled :

  
});
