import { test, expect, Locator } from '@playwright/test';

test("To check count of frames available", async ({ page }) => {

   await page.goto("https://vinothqaacademy.com/iframe");
  const frame = page.frames()
  console.log(frame.length)
    
});
