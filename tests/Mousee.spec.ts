import { test, expect } from '@playwright/test';

test("Drag and Drop", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com")
    const source = page.locator("//div[@id='draggable']")
    const target = page.locator("//div[@id='droppable']")
    await source.dragTo(target)
    await page.waitForTimeout(3000)
});




