import { test, expect } from '@playwright/test';

test("Title", async ({ page }) => {

    // await page.goto("https://www.naukri.com");

    // // Locate logo using Alt Text
    // const logo = page.getByAltText('Naukri Logo').first();
    // await expect(logo).toBeVisible();

    // ////////////// Locate by Placeholder
    // await page
    //     .getByPlaceholder("Enter skills / designations / companies")
    //     .fill("Playwright");

    // await page.waitForTimeout(2000);

    // ///////// Locate by Role
    // await page.goto("https://www.facebook.com/")
    // await page.getByRole('textbox', { name: 'password' }).fill("Shashan@123")
    // await page.waitForTimeout(2000);
    // await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill("Shashan")
    // await page.waitForTimeout(2000);
    // await page.getByRole('textbox', { name: 'password' }).fill("Shashan@123")
    // await page.waitForTimeout(2000);
    // await page.getByRole('link', { name: 'Forgotten password?' }).click()
 
    ////////// Locate by Text

    // await page.goto("https://in.indeed.com/")
    // await page.waitForLoadState('networkidle');
    // await page.getByPlaceholder('Job title, keywords, or company').fill('playwright')
    // await page.getByText('Find jobs').click()



}); 