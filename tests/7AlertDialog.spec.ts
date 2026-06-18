import { test, expect } from '@playwright/test';

test.skip('Simple alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    //Simple Alert :

    page.on('dialog', async (dialog) => {

        expect(dialog.type()).toBe('alert')
        expect(dialog.message()).toContain("I am an alert box!")
        await dialog.accept()
    })

    await page.click('text = Simple Alert')

});

test.skip('Confirm alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    //CONFIRMATION  Alert :

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toBe('confirm')
        expect(dialog.message()).toContain("Press a button!")
        await dialog.accept()
    })

    page.click('text = Confirmation Alert')
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!")

});


test('Prompt alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    //Promt  Alert :

    page.on('dialog', async (dialog) => {

        expect(dialog.type()).toBe('prompt')
        expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toBe("Harry Potter")
        await dialog.accept("Shshank Shinde")

    })

    await page.click('text = Prompt Alert')
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Shshank Shinde! How are you today?")
});

