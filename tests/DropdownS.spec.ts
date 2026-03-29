import { test, expect } from '@playwright/test';

test("Input box", async ({ page }) => {

    await page.goto("https://www.flipkart.com");
    // Better locator (stable)
    await page.locator("input[name='q']").nth(0).fill("mobile");
    // Suggestions locator
    const suggestions = page.locator("ul > li");
    // Auto-wait for dropdown
    await page.waitForTimeout(5000)
    // ✅ Await here
    const mobileSearch = await suggestions.allTextContents();
    console.log(mobileSearch)
    // Assertion
    expect(mobileSearch).toContain("mobile under 7000");
});

test.only("Orange hrm ", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[name='password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    await page.getByText("PIM").click()
    await page.locator("div[class='oxd-select-text--after']").nth(2).click()
    await page.waitForTimeout(5000)

    const values =  await page.locator("div[role='listbox'] > div").allTextContents()
    console.log(values)
    expect(values).toContain("Automaton Tester")
    const valu1 = await page.locator("div[role='listbox'] > div:nth-child(4)").click()
   
});

