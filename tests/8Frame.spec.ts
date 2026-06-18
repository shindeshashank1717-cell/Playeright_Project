import { test, expect } from '@playwright/test';

test('Iframe', async ({ page }) => {

    await page.goto("https://vinothqaacademy.com/iframe");
    await page.waitForLoadState('networkidle');

    //1) Page.frame : To check number of frames on page

    const frame = page.frames();
    console.log('Number of frame on webpage :' + frame.length)

   //2) page.frame : name/ url :

  const frame1 = page.frame({name : 'registeruser'})
  frame1?.fill('#vfb-7', 'shinde')
   await page.waitForTimeout(5000)
  frame1?.click('#vfb-31-1')
   await page.waitForTimeout(5000)
  frame1?.check('#vfb-20-2')

//3)  to check the element inside frame

const name= page.frameLocator("//iframe[@name='registeruser']").locator("#vfb-5")
name.fill('shashank')

});

