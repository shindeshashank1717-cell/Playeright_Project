import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto("https://testpages.eviltester.com/styled/frames/frames-test.html");

  //tO CHECK nUMBER OF FRAMES ON WEBPAGE

  const frames = page.frames();
  console.log("Total number of frames on webpage: " + frames.length);

  const frame1 = page.frame({name: "left"});
  if (frame1){

    const frame1Tesxt = await frame1.locator("h1").textContent();
    await (expect(frame1Tesxt).toBe("Left"));
  }
  else{
    console.log("Frame with name 'left' not found.");
  }


  const frame2 = page.frame({url : "/frame-includes/middle.html"})
  if (frame2){
     const text = await frame2.locator("h1").textContent();
     await (expect(text).toBe("Middle"));
  }
  else(
    console.log("Frame with url '/frame-includes/middle.html' not found.")
  )
});


test.only('Nested Frames', async ({ page }) => {

  await page.goto("https://play1.automationcamp.ir/frames.html");

  const parentFrame = page.frameLocator("#frame1");
  const childFrame = parentFrame.frameLocator("#frame2");

  await childFrame.locator("#click_me_2").click();

  await page.waitForTimeout(5000);

});
