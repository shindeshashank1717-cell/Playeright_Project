import { test, expect } from '@playwright/test';

test.only("Multi Window", async ({ page, context }) => {
    // 1. Navigate and only wait for the DOM to be ready
    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html", {
        waitUntil: 'domcontentloaded'
    });

    // 2. Setup the listener and click in parallel
    const [newWindow] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("#newWindowBtn").click()
    ]);

    // 3. Wait for the popup to be ready to interact with
    await newWindow.waitForLoadState('domcontentloaded');

    console.log("New Window Title:", await newWindow.title());

    await newWindow.close();
});