   import { test, expect, Locator } from '@playwright/test';
   

test("Date picker", async ({ page }) => {
   
   await page.goto("https://dayschedule.com/tools/age-calculator")
   const datepicker = await page.locator("#birth-date-today")
   expect (await datepicker).toBeVisible()

    //mm/dd/yyyy
    const month = "April";
    const year = "2027";
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