import { Page, Locator } from '@playwright/test'

export class LoginPage {

  //define variable
  private readonly page: Page;
  private readonly loginLink: Locator;
  private readonly userNameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  //Constructor
  constructor(page: Page) {
    this.page = page;
    this.loginLink = this.page.locator("#login2")
    this.userNameInput = this.page.locator("#loginusername")
    this.passwordInput = this.page.locator("#loginpassword")
    this.loginButton = this.page.locator("button[onclick='logIn()']")
  }

  //action method
  async clickloginLink() {
    await this.loginLink.click()
  }

  async enterUserName(username: string) {

    await this.userNameInput.clear();
     await this.userNameInput.fill(username)

  }

  async enterPassword(password: string) {

    await this.passwordInput.clear();
     await this.passwordInput.fill(password)

  }

  async clickOnLoginButton(){
    await this.loginButton.click()
  }

  async performLogin(username:string, password:string){
    
    await this.clickloginLink()
    await this.enterUserName(username)
    await this.enterPassword(password)
    await this.clickOnLoginButton()
  
  }
}