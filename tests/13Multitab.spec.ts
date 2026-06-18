import { test, expect } from '@playwright/test';

test.only("Multitab", async ({ page }) => {

await page.goto("https://rahulshettyacademy.com/AutomationPractice")
await page.waitForLoadState('networkidle')

const [newTab] = await Promise.all([

    page.waitForEvent('popup'),
    await page.locator("#opentab").first().click()

])
await newTab.waitForLoadState('networkidle')

});   