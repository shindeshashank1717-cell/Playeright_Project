   import { test, expect, Locator } from '@playwright/test';
   
   test("jquey date picker", async ({ page }) => {
   
   await page.goto("https://testautomationpractice.blogspot.com/")
   const datepicker = await page.locator("#datepicker")
   await datepicker.isVisible()
   expect (await datepicker).toBeVisible()

   //Fill method :
   await datepicker.fill("04/10/1998")
   await page.waitForTimeout(5000)

   });  

     test.only("Date picker", async ({ page }) => {
   
   await page.goto("https://testautomationpractice.blogspot.com")
   const datepicker = await page.locator("#datepicker")
   expect (await datepicker).toBeVisible()

    //mm/dd/yyyy
    const month = "April";
    const year = "2040";
    const date = "10";

  await datepicker.click()

  while (true){
    const currentMonth = await page.locator(".ui-datepicker-month").textContent()
    const currentYear = await page.locator(".ui-datepicker-year").textContent()

    if (currentMonth === month && currentYear ===year){
        break;
    }
        await page.locator(".ui-datepicker-next").click()  
   
  }

  await page.locator(".ui-datepicker-calendar td a").filter({hasText : "10"}).click()

   });     