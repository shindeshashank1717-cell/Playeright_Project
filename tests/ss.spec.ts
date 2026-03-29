import { test, expect } from '@playwright/test';

test("ss", async ({ page }) => {

    await page.goto("https://www.redbus.in")
    await page.waitForTimeout(3000)
    //timestamp for unique file name
    const timestamp =Date.now()
    //screenshot of current browser view
    await page.screenshot({path: "Screenshots/"+ "First Home page" + timestamp +".png"})
     //screenshot of full page
    await page.screenshot({path: "screenshots/"+ "First Full page"+ timestamp + ".png", fullPage: true})
    //screenshot of specific element
    await page.locator("//div[@class='titleContents___a11449']").screenshot({path : "screenshots/"+ "Title Content"+ timestamp +".png"})

});

test.only("ss on failure", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com")
//get title of page and validate assertion expected and actual
    const title = await page.title()
    expect(title).toBe("Test Automation Practicse") 

});





