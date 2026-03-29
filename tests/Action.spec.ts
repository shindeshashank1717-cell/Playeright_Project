import { test, expect } from '@playwright/test';

test("Text input validation", async ({ page }) => {
   await page.goto("https://testautomationpractice.blogspot.com/");

   const textBox = page.locator("#name");

   // 1) Check enabled
   await expect(textBox).toBeEnabled();

   // 2) Check visible
   await expect(textBox).toBeVisible();

   // 3) Check maxlength
   const length = await textBox.getAttribute("maxlength");
   expect(length).toBe("15");

   //4) Fill
   await textBox.fill("Shashank Shinde")

   //5) To check entered value correct or not :

      const enteredValue = await textBox.inputValue()
      expect(enteredValue).toBe("Shashank Shinde")

});
