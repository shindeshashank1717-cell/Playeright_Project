import { test, expect, Locator } from '@playwright/test';

test("Alt Text ", async ({ page }) => {
await page.goto("https://www.redbus.in/")
//1)  Locate by Alt Text 
const logo = page.getByAltText("redBus logo")
expect(logo).toBeVisible
});  

test("Locate by Text ", async ({ page }) => {
await page.goto("https://www.redbus.in/")
//2)  Locate by Text 
const Text = page.getByText("India's No. 1 online bus ticket booking site")
expect (Text).toBeVisible
}); 

test("Locate by Role ", async ({ page }) => {
await page.goto("https://www.facebook.com/")
//3)  Locate by Role 
 await expect (page.getByRole('link', { name: 'Forgotten password?' })).toBeVisible()

}); 


test("Locate by Label ", async ({ page }) => {
await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")

//4)  Locate by Label 
await page.getByLabel("Current Address:").fill("Shashan")


}); 

test("Locate by Place holder ", async ({ page }) => {
await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")

//5)  Locate by PlaceHolder 
 await page.getByPlaceholder("Enter Mobile Number").fill("9881812844")

}); 
