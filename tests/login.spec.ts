import { test } from '@playwright/test';

test("Title", async ({ page }) => {
await page.goto("https://www.facebook.com")
await page.locator ('[id^="u_0_0"]').click()
await page.locator("input[name='firstname']").fill("shashank")
await page.locator("input[name='lastname']").fill("shinde")
await page.locator("#day").selectOption("10")
await page.locator("#month").selectOption("Apr")
await page.locator("#year").selectOption("1998")
await page.locator("#sex").nth(1).check()
await page.locator("input[name='reg_email__']").fill("123456789")
await page.locator("input[name='reg_passwd__']").fill("sssss")
await page.locator("//button[@name='websubmit']").clear

});  