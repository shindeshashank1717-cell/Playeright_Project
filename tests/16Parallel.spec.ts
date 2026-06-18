import { test, expect } from '@playwright/test';
test.describe.configure({mode : 'parallel'});

//1) Test
test("Test 1", async ({ page }) => {

    await page.goto("https://www.google.com")
    console.log("Test 1 is completed")
});

//2) Test
test("Test 2", async ({ page }) => {

    await page.goto("https://www.facebook.com")
    console.log("Test 2 is completed")
});

//3) Test
test("Test 3", async ({ page }) => {

    await page.goto("https://www.cashify.in")
    console.log("Test 3 is completed")
});


//4) Test
test("Test 4", async ({ page }) => {

    await page.goto("https://www.amazon.in")
    console.log("Test 4 is completed")
}); 