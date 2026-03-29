import { test, expect, Locator } from '@playwright/test';

test("Input box ", async ({ page }) => {

    await page.goto ("https://testautomationpractice.blogspot.com/")
    //Radio Button :
   const maleRadio =  page.locator("#male")
   await expect (maleRadio).toBeVisible()
   await expect (maleRadio).toBeEnabled()
  expect (await  maleRadio.isChecked()).toBe(false)

  await maleRadio.check()
  expect (await  maleRadio.isChecked()).toBe(true)

  const sundayCheckBox:Locator = page.locator("Sunday")
  sundayCheckBox.check()
  await expect (sundayCheckBox).toBeChecked()



});  