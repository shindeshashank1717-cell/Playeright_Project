import { test, Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  private userNameField = "#user-name"
  private userPasswordField = "#password"
  private loginButton = "#login-button"

  async loginToSauceDemo(userName: string, password: string) {
    await this.page.fill(this.userNameField, userName);
    await this.page.fill(this.userPasswordField, password)
    await this.page.click(this.loginButton)

  }
}