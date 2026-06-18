import { test, expect } from '@playwright/test';
import path from 'path'

test.only("Screenshot", async ({ page }) => {

 //1) To take screenshot of visible page:

 await page.goto("https://www.google.com/");
await page.screenshot({path: `Screenshot/google - ${Date.now()}.png`})

//2) To take screenshot of complete  page:

await page.goto("https://www.naukri.com/")
await page.screenshot({path : `Screenshot/naukri - ${Date.now()}.png`, fullPage: true})

//3) To take screenshot of specific element :

await page.goto("https://www.au.bank.in")
await page.locator('.homepagebanner').screenshot({path : `Screenshot/au - ${Date.now()}.png`})

});     