import { test, expect } from '@playwright/test';

test("Alert", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com");

    page.on('dialog', async (dialog) => {
        console.log(dialog.type());
        console.log(dialog.message());
        await dialog.accept();
        expect(dialog.message()).toContain("I am an alert box!");
    })
    await page.locator("//button[@id='alertBtn']").click();

});

test("Confirmation Alert", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com");

    page.on('dialog', async (dialog) => {

        console.log(dialog.type())
        console.log(dialog.message())
        expect(await dialog.message()).toContain("Press a button!")
        await dialog.accept()

    })

    await page.locator("//button[@id='confirmBtn']").click()
    const text = await page.locator("#demo").innerText()
    expect(text).toContain("You pressed OK!")


});


test.only("Promt Alert", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com");

    page.on('dialog', async (dialog) => {

        console.log(dialog.type())
        expect(dialog.type()).toContain("prompt")
        console.log(dialog.message())
        expect(dialog.message()).toContain("Please enter your name:")
        await dialog.accept('shashank');
        console.log(dialog.defaultValue())
        expect(dialog.defaultValue()).toContain("Harry Potter")
        const text = await page.locator("#demo").innerText()
        expect(text).toContain("Hello shashank! How are you today?")

    })

    await page.locator("//button[@id='promptBtn']").click()



});