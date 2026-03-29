import { test, expect, Locator } from '@playwright/test';

test.only("Input box ", async ({ page }) => {

    await page.goto ("https://testautomationpractice.blogspot.com/")
    const textBox:Locator= page.locator("#name")
    await expect (textBox).toBeVisible()  //tobeVisible
    await expect (textBox).toBeEnabled()   //tobeEnabled

    const maxLenght : any = await textBox.getAttribute("maxlength") //.get attribute method : to get value of attribute
    expect (maxLenght).toBe("18")   //assertion

    await textBox.fill("Shashank Shinde")
    console.log (await textBox.inputValue())  //.inputValue to get entered value
   const enteredvalue =  await textBox.inputValue()
   await expect (enteredvalue).toBe("Shashank Shinde") // assertion
   await page.waitForTimeout(3000)
});  