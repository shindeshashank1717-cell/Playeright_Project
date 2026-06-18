import { test, expect } from '@playwright/test';

test('CheckBox', async ({ page }) => {

    await page.goto("https://practice-automation.com/form-fields");

    // 1) Verify checkbox is visible
    await expect( page.getByRole('checkbox', { name: 'Water' })).toBeVisible();

    //2) Verify checkbox is enabled
    await expect (page.getByRole('checkbox', {name : 'coffee'})).toBeVisible();

    //3) is checked to be false
     expect (await page.getByRole('checkbox', {name : 'coffee'}).isChecked()).toBe(false);

    //4) Check the checkbox
    const coffeeCheckbox = page.getByRole('checkbox', {name : 'coffee'});
    await coffeeCheckbox.check();

      //5) is checked to be True
    expect (await page.getByRole('checkbox', {name : 'coffee'}).isChecked()).toBe(true)

});