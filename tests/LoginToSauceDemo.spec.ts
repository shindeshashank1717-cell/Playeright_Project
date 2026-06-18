import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { ProductsPage } from '../Pages/ProductsPage'

test("User should be able to login to sauce demo", async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.Navigate("https://www.saucedemo.com/")
    await login.waitForPageLoad()
    await login.loginToSauceDemo("standard_user", "secret_sauce")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

    const isProductFieldVisible = await products.isProductFieldVisible()
    expect(isProductFieldVisible).toBeTruthy()

    const isLogoVisible = await products.isLogoVisible()
    expect(isLogoVisible).toBeTruthy()

    const productCount = await products.validateProductDetails()

    const name =await products.addToCartByProductName("Sauce Labs Backpack")


}
)