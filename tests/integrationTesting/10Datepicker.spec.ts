import { test, expect } from '@playwright/test';

test.only("Date picker", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Datepicker.html")
    const datepicker = await page.locator("#datepicker1").first()
    expect(await datepicker).toBeVisible()

    //mm/dd/yyyy
    const month = "April";
    const year = "2028";
    const date = "10";

    await datepicker.click()

    while (true) {

        const currentmonth = await page.locator(".ui-datepicker-month").textContent()
        const currentyear = await page.locator(".ui-datepicker-year").textContent()

        if (currentmonth === month && currentyear === year) {
            break;
        }

        await page.locator(".ui-datepicker-next").click()
    }

    await page.locator(".ui-datepicker-calendar td a").filter({ hasText: "10" }).click()

});  