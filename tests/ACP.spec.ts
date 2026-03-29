import { test, expect } from '@playwright/test';

test("Input box", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com");
    await page.locator("//input[@id='comboBox']").fill("iphone")

});