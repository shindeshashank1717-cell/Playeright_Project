import { test, expect } from '@playwright/test';

test.only("Multi Window", async ({ page, context }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice")
    await page.waitForLoadState('networkidle')

    const [newWindow] = await Promise.all([

        context.waitForEvent('page'),
        page.locator("#openwindow").click()
    ])

    await newWindow.waitForLoadState('domcontentloaded')
    console.log(newWindow.url())


});   