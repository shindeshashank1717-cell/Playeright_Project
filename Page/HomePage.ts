import { Page, Locator, expect } from '@playwright/test';

export class AutomationPracticePage {

    readonly page: Page;

    // ===== Locators =====

    // Name field
    readonly nameInput: Locator;

    // Email field
    readonly emailInput: Locator;

    // Phone field
    readonly phoneInput: Locator;

    // Gender Radio Buttons
    readonly maleRadio: Locator;
    readonly femaleRadio: Locator;

    // Checkboxes
    readonly sundayCheckbox: Locator;
    readonly mondayCheckbox: Locator;

    // Country Dropdown
    readonly countryDropdown: Locator;

    // Date Picker
    readonly datePicker: Locator;

    // Alert Button
    readonly alertButton: Locator;

    // Confirmation Alert
    readonly confirmAlertButton: Locator;

    // Dynamic Button
    readonly startButton: Locator;

    // Web Table
    readonly webTable: Locator;

    // ===== Constructor =====
    constructor(page: Page) {
        this.page = page;

        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.phoneInput = page.locator('#phone');

        this.maleRadio = page.locator('#male');
        this.femaleRadio = page.locator('#female');

        this.sundayCheckbox = page.locator('#sunday');
        this.mondayCheckbox = page.locator('#monday');

        this.countryDropdown = page.locator('#country');

        this.datePicker = page.locator('#datepicker');

        this.alertButton = page.locator("//button[text()='Simple Alert']");
        this.confirmAlertButton = page.locator("//button[text()='Confirmation Alert']");

        this.startButton = page.locator("//button[text()='START']");

        this.webTable = page.locator("table[name='BookTable']");
    }

    // ===== Actions (Methods) =====

    async navigate() {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async enterName(name: string) {
        await this.nameInput.fill(name);
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPhone(phone: string) {
        await this.phoneInput.fill(phone);
    }

    async selectGender(gender: 'male' | 'female') {
        if (gender === 'male')
            await this.maleRadio.check();
        else
            await this.femaleRadio.check();
    }

    async selectDay(day: 'sunday' | 'monday') {
        if (day === 'sunday')
            await this.sundayCheckbox.check();
        else
            await this.mondayCheckbox.check();
    }

    async selectCountry(country: string) {
        await this.countryDropdown.selectOption(country);
    }

    async selectDate(date: string) {
        await this.datePicker.fill(date);
    }

    async clickSimpleAlert() {
        await this.alertButton.click();
    }

    async clickConfirmationAlert() {
        await this.confirmAlertButton.click();
    }

    async clickStartButton() {
        await this.startButton.click();
    }

    async verifyTableVisible() {
        await expect(this.webTable).toBeVisible();
    }
}