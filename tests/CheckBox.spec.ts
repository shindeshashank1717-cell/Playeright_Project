import { test, expect, Locator } from '@playwright/test';

test("Assertion", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const saturday : Locator = page.locator("#saturday")
  await (saturday).check()
 await  expect(saturday).toBeChecked
  await page.waitForTimeout(5000);

  //to check all the check boxes :

  const checkBoxes = [
    '#sunday',
    '#monday',
    '#tuesday',
    '#wednesday',
    '#thursday',
    '#friday',
    '#saturday'
  ];

  for (const allcheckBox of checkBoxes){

    await page.locator(allcheckBox).check()
  }


});
