import { test, expect, Locator } from '@playwright/test';

test("Input box", async ({ page }) => {
    await page.goto ("https://testautomationpractice.blogspot.com")
    
    //Multi select dropdown:

    await page.locator("#colors").selectOption(['Green', 'White'])
    await page.waitForTimeout(4000)

    //Assertion to check count of Options available in dropdown :

    const allaOptions = page.locator("#country>option")
    await expect (allaOptions).toHaveCount(10)

    //check a specific value is present in dropdown or not :

    await expect(page.locator("#country > option")).toContainText("India");
    
})