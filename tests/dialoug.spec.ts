import { test, expect } from '@playwright/test';

test("Alert Dialoug", async ({ page }) => {
      
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async (dialog) => {
    console.log("Dialoug type is:", dialog.type()) //Return type of dialoug is        
    expect(dialog.message()).toContain('I am an alert box!') //text on dialoug
    await dialog.accept()})

    await page.locator("button[id='alertBtn']").click()
    await page.waitForTimeout(3000)
});

test.only("Confirm Dialoug", async ({ page }) => {
      
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async (dialog) => {
    console.log("Dialoug type is:", dialog.type()) //Return type of dialoug is        
    expect(dialog.message()).toContain('Press a button!') //text on dialoug
    await dialog.dismiss()})

    await page.locator("button[id='confirmBtn']").click()
    await page.waitForTimeout(3000)
});

