import { test, expect } from '@playwright/test';

test ('Dropdown', async ({page})=> {

    //1) select by index
    //2) select by value
    //3) select by visible text
    //4) select by label
    //  await page.goto("https://practice-automation.com/form-fields");
    // await page.locator("#automation").click();

    // //1) select byindex
    // await page.locator("#automation").selectOption({index: 3});
    // //select by Text
    // await page.locator("#automation").selectOption('Yes')
    // //select by value
    // await page.locator("#automation").selectOption({value: 'no'});

   await page.goto("https://www.tutorialspoint.com/selenium/practice/select-menu.php")

// Open dropdown
await page.locator(".mbsc-textfield-tags-placeholder.mbsc-ios").click();

// Select options
await page.getByText("Books").click();
await page.getByText("Health & Beauty").click();


   



    
}
)
