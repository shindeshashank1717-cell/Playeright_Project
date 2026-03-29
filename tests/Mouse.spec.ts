import { test, expect } from '@playwright/test';

test("Mouse Hover", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByText('Point Me').hover()
    await page.locator('.dropdown-content').getByText('Laptops').click();
    await page.waitForTimeout(3000)

});


test("Double Click", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com")
  const button =  page.getByRole('button', { name: 'Copy Text' })
  button.dblclick()
  await page.waitForTimeout(3000)
  const value = page.locator("#field2")
  await expect(value).toHaveValue("Hello World!")

})


test.only("Drag and Drop", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com")
    const source = page.locator("div[id='draggable']")
    const target = page.locator("div[id='droppable']")
    await source.dragTo(target)
    await page.waitForTimeout(3000)



});






;

