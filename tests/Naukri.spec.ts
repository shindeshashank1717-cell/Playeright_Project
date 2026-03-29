import { test, expect, Locator } from '@playwright/test';

test("Alt Text ", async ({ page }) => {
await page.goto("https://www.naukri.com/")
await page.getByTitle("Jobseeker Login").click()
await page.getByPlaceholder("Enter your active Email ID / Username").fill("shindeshashank1717@gmail.com")
await page.getByPlaceholder("Enter your password").fill("shashankS10@")
await page.locator(".btn-primary.loginButton").click()

const logo = page.getByAltText("Naukri Logo")
expect (logo).toBeVisible

await page.getByRole('link', { name: 'View profile' }).click()

await page.locator(".icon.edit").first().click()
await page.getByPlaceholder("Enter Your Name").fill("Shashank Shinde")
await page.locator("#totalAbsCtc_id").fill("10,00,000")
await page.locator("#saveBasicDetailsBtn").click()


});  