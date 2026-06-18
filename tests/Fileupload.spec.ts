import { test } from '@playwright/test';
import path from 'path';

test("File upload", async ({ page }) => {

    await page.goto("https://testpages.eviltester.com/pages/files/file-upload")

    const filePath = path.join(__dirname, 'Uploads', 'Two.txt')
    //#fileinput

    await page.setInputFiles("#fileinput", filePath)
    await page.waitForTimeout(5000)

});

test.only("Multi File upload", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/FileUpload.html")

    const filepath1 = path.join(__dirname, 'Uploads', 'one.txt')
    const filepath2 = path.join(__dirname, 'Uploads', 'Two.txt')

    await page.setInputFiles("#input-4", [filepath1, filepath2])


    await page.waitForTimeout(5000)

});  