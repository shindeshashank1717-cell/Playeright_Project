import { test, Locator, Page } from '@playwright/test'
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private productText = ".title"
    private appLogo = ".app_logo"
    private productList = ".inventory_item"
    private productTitle = ".inventory_item_name"
    private productDescription = ".inventory_item_desc"
    private productPrice = ".inventory_item_price"
    private addToCartButton = ".btn_primary.btn_small.btn_inventory"


    async addToCartByProductName(targetproductName: string){

        const productNameCount = await this.page.locator(this.productList).count()
        console.log(productNameCount)

        for (let i=0; i<productNameCount;i++){
              const product = await this.page.locator(this.productList).nth(i).locator(this.productTitle).textContent()
              console.log(product)
              if (product?.trim() === targetproductName){
                  await this.page.locator(this.productList).nth(i).locator(this.addToCartButton).click()
                  break
              }
        }
    }

    async isProductFieldVisible(): Promise<boolean> {
        return await this.page.isVisible(this.productText)
    }

    async isLogoVisible(): Promise<boolean> {
        return await this.page.isVisible(this.appLogo)
    }

    async validateProductDetails() {
        const products = await this.page.locator(this.productList).count()
        console.log('Total Products found:', products)

        for (let i = 0; i < products; i++) {

            const title = await this.page.locator(this.productList).nth(i).locator(this.productTitle).innerText()
            console.log('product title:', title)

            if (!title) {
                throw new Error('product title is missing for product index: ${i}')
            }

            const description = await this.page.locator(this.productList).nth(i).locator(this.productDescription).innerText()
            console.log('product description:', description)

            if (!description) {
                throw new Error('product description is missing for product index: ${i}')
            }

            const price = await this.page.locator(this.productList).nth(i).locator(this.productPrice).innerText()
            console.log('product price:', price)

            if (!price) {
                throw new Error('product price is missing for product index: ${i}')
            }

            const addToCartButtonVisible = await this.page.locator(this.productList).nth(i).locator(this.addToCartButton).isVisible()
            console.log('add to cart button visible:', addToCartButtonVisible)

            if (!addToCartButtonVisible) {
                throw new Error('add to cart button is not visible for product index: ${i}')
            }

        }
    }
}