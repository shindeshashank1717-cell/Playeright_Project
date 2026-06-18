import { test, expect } from '@playwright/test';

//2) Radio :  TT ICI

//1) To be Visble Visible

test("Radio Button", async ({ page }) => {
    //1) To be Visble Visible
    await page.goto("https://practice-automation.com/form-fields")
    await expect(page.getByRole('radio', { name: 'Green' })).toBeVisible();

    // 2)be Visble Enable
    await expect(page.getByRole('radio', { name: 'Yellow' })).toBeEnabled();

    //3) is checked tobe false
    const BlueRadioButton = page.getByRole('radio', { name: 'Blue' });
    expect( await BlueRadioButton.isChecked()).toBe(false)

//4) Check
    await BlueRadioButton.check();

//5) is checked tobe true
    expect(await BlueRadioButton.isChecked()).toBe(true)


//6) Select Multiple Check Box :
const checkboxes = [       
    "//input[@id='drink1']",
    "//input[@id='drink2']",
    "//input[@id='drink3']",
    "//input[@id='drink4']",
    "//input[@id='drink5']"
]

for (const Allcheckboxes of checkboxes){
    await page.locator(Allcheckboxes).check();
    expect(await page.locator(Allcheckboxes).isChecked()).toBe(true)
}




})

