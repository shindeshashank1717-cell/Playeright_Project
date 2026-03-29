import { test, expect, Locator } from '@playwright/test';

test("Input box ", async ({ page }) => {
    await page.goto ("https://www.naukri.com")
    await page.getByRole('link', {name: 'Login'}).first().click()
    const textBox:Locator= await page.getByRole('textbox', {name :"Enter your active Email ID / Username"})
    await expect (textBox).toBeVisible();
    await expect (textBox).toBeEnabled();
   const Maxlenght= await textBox.getAttribute("maxlength")
   expect (Maxlenght).toBe("100")
   await textBox.fill("shindeshashank1717@gmail.com")
   const enteredvalue= await textBox.inputValue()
   expect (enteredvalue).toBe("shindeshashank1717@gmail.com")
   const Password:Locator= await page.getByRole('textbox', {name :"Enter your password"})
   Password.fill("shashankS10@")
   await page.locator("//button[@type='submit']").click()
   await page.waitForTimeout(4000)

}); 

test("Radio Button", async ({ page }) => {
    await page.goto ("https://testautomationpractice.blogspot.com")
    const FemaleRadio =  page.getByRole('radio',{name:"Female"})
    await expect (FemaleRadio).toBeVisible()
    await expect (FemaleRadio).toBeEnabled()
    expect (await FemaleRadio.isChecked()).toBe(false)
    await FemaleRadio.check()
    expect (await FemaleRadio.isChecked()).toBe(true)
})

test.only("Check Box", async ({ page }) => {
    await page.goto ("https://testautomationpractice.blogspot.com")
    const FridayCheckox =  page.getByRole('checkbox',{name:"Thursday"})
    await expect (FridayCheckox).toBeVisible()
    await expect (FridayCheckox).toBeEnabled()
    expect (await FridayCheckox.isChecked()).toBe(false)
    await FridayCheckox.check()
    expect (await FridayCheckox.isChecked()).toBe(true)
    await page.waitForTimeout(4000)
    await FridayCheckox.uncheck()

    //Select all checkboxes

    const allCheckboxes = [
        page.getByRole('checkbox', { name: "Sunday" }),
        page.getByRole('checkbox', { name: "Monday" }),
        page.getByRole('checkbox', {name: "Tuesday"}),
        page.getByRole('checkbox', { name: "Wednesday" }),
        page.getByRole('checkbox', { name: "Thursday" }),
        page.getByRole('checkbox', { name: "Friday" }),
        page.getByRole('checkbox', { name: "Saturday" })
    ];

    for (const checkbox of allCheckboxes) {
        await checkbox.check();
    }
        await page.waitForTimeout(4000)
    });
      