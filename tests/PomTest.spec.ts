import { test } from '@playwright/test';
import { AutomationPracticePage } from '../page/HomePage';

test('Fill Automation Practice Form', async ({ page }) => {

    const practicePage = new AutomationPracticePage(page);

    await practicePage.navigate();

    await practicePage.enterName("Shashank");
    await practicePage.enterEmail("test@gmail.com");
    await practicePage.enterPhone("9999999999");

    await practicePage.selectGender("male");
    await practicePage.selectDay("sunday");

    await practicePage.selectCountry("india");

    await practicePage.selectDate("02/26/2026");

    await practicePage.verifyTableVisible();
});