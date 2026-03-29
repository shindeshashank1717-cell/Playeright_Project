import { test, expect, Locator } from '@playwright/test';

test("Assertion", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    //1) Select by visible Text
    await page.locator("#country").selectOption("Canada")
    await page.waitForTimeout(3000);

    //2) Select By value attribute
    await page.locator("#country").selectOption({value:"japan"})
    await page.waitForTimeout(3000);
    
    //3) Select by Label
    await page.locator("#country").selectOption({label:"Germany"})
    await page.waitForTimeout(3000);
    
    //4) Select by index
     await page.locator("#country").selectOption({index:0})
    await page.waitForTimeout(3000);

    //5) Check count of dropdown Option
  const allOptions =  page.locator("#country>option")
  await expect (allOptions).toHaveCount(10)

  //6) Check presence of value in dropdown 
    const content = await page.locator("#country").textContent()
    expect(content?.includes("Germany")).toBeTruthy()

  

});
