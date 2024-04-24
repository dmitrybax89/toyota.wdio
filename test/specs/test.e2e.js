import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import PdpPage from '../pageobjects/pdp.page.js'
import HeaderComponent from '../pageobjects/header.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://autoparts-stg.toyotaofdecatur.com/')
        await HomePage.header.isDisplayed()
        await HomePage.headerSearchInput.isDisplayed()
        await HomePage.headerSearchInput.click()
        await HomePage.headerSearchInput.setValue('engine')
        await HomePage.headerSearchResultFirst.click()
        await PdpPage.addToCartButton.isDisplayed()
        await PdpPage.addToCartButton.click()
        await browser.pause(5000)
        await HeaderComponent.headerCartIcon.click()
        await browser.pause(5000)
        await HeaderComponent.headerCart_ViewCart_Button.click()
        await browser.pause(15000)
        await CartPage.checkout_button.click()
        await browser.pause(10000)
        await CartPage.continue_as_guest_button.click()
        await browser.pause(10000)
        await CheckoutPage.emailInput.click()
        await CheckoutPage.emailInput.setValue('dmitry.ivanov@toyota.com')
        await browser.pause(5000)
        await CheckoutPage.deliveryOptions_inStorePickup.click()
        await browser.pause(15000)
    })
})

