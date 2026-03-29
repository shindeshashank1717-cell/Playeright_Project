//LocatorRevision.spec.ts
import { test, expect, Locator } from '@playwright/test';

test("CSS SELECTOR", async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/")

//1.a) tagname.classname
await page.locator("input.wikipedia-search-input").fill("Test123")
//1.b) tagname#id
await page.locator("input#name").fill("Test123")
//1.c) tagname[attribute='value']
await page.locator("input[id='email']").fill("Test123")
await page.waitForTimeout(4000)
}); 

test("X-path", async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/")
//1)Relative X-path:
await page.locator("//input[@id='phone']").fill("123456789")
await page.waitForTimeout(4000)
}); 

test.only("Playwright Built-in-Locators", async ({ page }) => {

//AT RLP TT
//1) AltText()
//2) Text() 
//3) Role() 
//4) Label() 
//5) Placeholder() 
//6) Title() 
//7) TestId() 

//1) AltText()
await page.goto("https://www.naukri.com/")
await expect(page.getByAltText("Naukri Logo").first()).toBeVisible();

//2) Text() 
await (page.getByText("Trust & safety")).click()
await page.waitForTimeout(4000)

//3) Role()
await page.goto("https://testautomationpractice.blogspot.com/")
await page.getByRole('radio', {name:"Female"}).check()
await page.waitForTimeout(4000)

//4) Label()
//5) Placeholder()
await page.getByPlaceholder("Enter Email").fill("shindeshashank.com")
await page.waitForTimeout(4000)

await page.getByRole('textbox', {name :"Phone"}).fill("123456789")

}); 