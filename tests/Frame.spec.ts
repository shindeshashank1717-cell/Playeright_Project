import { test, expect } from '@playwright/test';

test.only("inner/child frames demo - frameLocator", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
    // Parent Frame → frame_3
    const frame3 = page.frameLocator("[src='frame_3.html']");
    // 1️⃣ Fill textbox (parent frame element)
    await frame3.locator("[name='mytext3']").fill("Welcome");
    // 2️⃣ Child frame inside frame_3
    const childFrame = frame3.frameLocator("iframe");
    // 3️⃣ Locate radio button by label
    const radio = childFrame.getByLabel("I am a human");
    // Action
    await radio.check();
    // Assertion
    await expect(radio).toBeChecked();
    await page.waitForTimeout(5000);

});
