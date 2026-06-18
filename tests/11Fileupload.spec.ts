import { test, expect } from '@playwright/test';
import path from 'path'

test.only("File Upload", async ({ page }) => {

    await page.goto("https://testpages.eviltester.com/pages/files/file-upload")
    const filepath = path.join(__dirname, 'uploads', 'one.txt')
    await page.setInputFiles("#fileinput", filepath)
    await page.waitForTimeout(5000)

    //Multiple file upload :

    await page.goto("https://testautomationpractice.blogspot.com");

    const filepath1 = path.join(__dirname, 'uploads', 'one.txt')
    const filepath2 = path.join(__dirname, 'uploads', 'two.txt')
    await page.setInputFiles("#multipleFilesInput", [filepath1, filepath2])
    await page.waitForTimeout(5000)


});   