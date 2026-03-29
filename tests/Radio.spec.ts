import { test, expect } from '@playwright/test';

test("Assertion", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const RadioButton = page.locator("#male")
  expect (RadioButton).toBeVisible
  expect (RadioButton).toBeEnabled
  await RadioButton.check()
  await expect (RadioButton).toBeChecked()


});
