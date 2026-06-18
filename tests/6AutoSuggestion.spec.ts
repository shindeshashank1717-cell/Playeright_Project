import { test, expect } from '@playwright/test';

// test('Auto Suggestion', async ({ page }) => {

//     await page.goto("https://www.amazon.in");
//     await page.getByRole('searchbox', {name : 'Search Amazon.in'}).fill("book")
//     await page.waitForSelector(".left-pane-results-container")
//    await expect (page.locator(".left-pane-results-container")).toBeVisible();
//    await page.waitForTimeout(5000);
//   const Bookcount = await page.locator("[id*='sac-suggestion-row']").count()
//   console.log(Bookcount)
//   await expect(page.locator("[id*='sac-suggestion-row']")).toHaveCount(20)

//   const AllBookOption= await page.locator("[id*='sac-suggestion-row']").allTextContents()
//     console.log(AllBookOption)

//     await expect (page.locator("[id*='sac-suggestion-row']", {hasText : 'bookmark'}).first()).toBeVisible()

//     await  page.locator("[id*='sac-suggestion-row']", {hasText : 'bookmark'}).first().click()
//     await page.waitForTimeout(5000)
//     await page.close()
// })  

test('Auto Suggestion', async ({ page }) => {

  await page.goto('https://motorpartsjunction.in');

  await page.locator('.icon.icon-search').first().click();

  await page.locator('#Search-In-Modal-1').fill('vw vento');

  await page.waitForTimeout(3000);

  // COUNT OF ITEMS IN AUTOSUGGESTION
  await expect(
    page.locator('.predictive-search__item-heading.h5')
  ).toHaveCount(10);

  // APPROACH 1
  // await page
  //   .locator('.predictive-search__item-heading.h5', {
  //     hasText: 'VW Polo, Vento, Ameo Bonnet Opener Bracket - 3C2823633A VW'
  //   })
  //   .click();

  // APPROACH 2 - LOOP AND ITERATE
  const vwDropdowns = await page.locator('.predictive-search__item-heading.h5').all();

  for (const dropdown of vwDropdowns) {

    const text = await dropdown.textContent();

    if (
      text && text.includes('VW Polo, Vento, Ameo Bonnet Opener Bracket - 3C2823633A VW')
    ) {
      await dropdown.click();
      break; // stop loop after clicking
    }
  }
});