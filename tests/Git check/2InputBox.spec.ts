import { test, expect } from '@playwright/test';
//Testing
test("Input Box", async ({ page }) => {

await page.goto("https://practice-automation.com/form-fields")

//1) To be visible
await expect (page.getByRole('textbox', { name: 'Name' })).toBeVisible();

//2) To be Enabled
await expect (page.getByRole('textbox', { name: 'Password' })).toBeVisible();

//3) Get attribiute method : To check lenght of the input box
const MaxlenghtName = await  page.getByRole('textbox', { name: 'Name' }).getAttribute('maxLength');
console.log(MaxlenghtName)

//4) Fill
await  page.getByRole('textbox', { name: 'Name' }).fill('shashank')

//5) To check entered value
const enteredValue = await  page.getByRole('textbox', { name: 'Name' }).inputValue();
console.log(enteredValue)
await expect(enteredValue).toBe('shashank')


})