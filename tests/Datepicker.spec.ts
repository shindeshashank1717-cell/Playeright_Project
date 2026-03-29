import { test, expect, Locator } from '@playwright/test';

test("Input box ", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("input[id='datepicker']").click()

    const month = 'February';
    const year = '2026';
    const date = '20';

    while (true) {
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        const currentYear = await page.locator('.ui-datepicker-year').textContent()

        if (currentMonth === month && currentYear === year) {
            break
        }

        await page.locator(".ui-datepicker-next").click()


    }
});  