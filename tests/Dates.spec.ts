import { test, expect } from '@playwright/test';

   test.only("Date picker", async ({ page }) => {
   
   await page.goto("https://demo.automationtesting.in/Datepicker.html")
   const datepicker = await page.locator("#datepicker1").first()
   expect (await datepicker).toBeVisible()

    //mm/dd/yyyy
    const month = "April";
    const year = "2030";
    const date = "10";

  await datepicker.click()

  // while (true){
  //   const currentMonth = await page.locator(".ui-datepicker-month").textContent()
  //   const currentYear = await page.locator(".ui-datepicker-year").textContent()

  //   if (currentMonth === month && currentYear ===year){
  //       break;
  //   }
  //       await page.locator(".ui-datepicker-next").click()  
   
  // }

  // await page.locator(".ui-state-default").filter({hasText : "10"}).click()

   });  