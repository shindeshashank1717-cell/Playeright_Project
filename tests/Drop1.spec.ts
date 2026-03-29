import { test, expect, Locator } from '@playwright/test';

test("Input box", async ({ page }) => {
    await page.goto ("https://testautomationpractice.blogspot.com")
    //Select Option Method :
        await page.locator("#country").selectOption("India")
        await page.waitForTimeout(4000)

    //Select by index :
     await page.locator("#country").selectOption({index:3})
     await page.waitForTimeout(4000)

     //select by value:
    await page.locator("#country").selectOption({value:'china'})
    await page.waitForTimeout(4000)

    //select by visible text :
    await page.locator("#country").selectOption("France")
    await page.waitForTimeout(4000)

    //select by label :
    await page.locator("#country").selectOption({label:"Germany"})
    await page.waitForTimeout(4000)
})