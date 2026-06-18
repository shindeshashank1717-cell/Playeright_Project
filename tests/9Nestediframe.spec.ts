import { test, expect } from '@playwright/test';

test('Iframe', async ({ page }) => {

    await page.goto("https://www.dezlearn.com/nested-iframes-example");
    await page.waitForLoadState('networkidle');

    //1) Nested Frame

    const Parentframe = page.frame({name : '.demo_parent_iframe'})
    Parentframe?.click('#u_5_5')

 const childframe = Parentframe?.childFrames()[0]
    childframe?.click('#u_5_6')
   


});

