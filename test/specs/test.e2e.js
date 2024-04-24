import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import PdpPage from '../pageobjects/pdp.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://autoparts.toyota.com/')
        await HomePage.header.isDisplayed()
        await HomePage.headerSearchInput.isDisplayed()
        await HomePage.headerSearchInput.click()
        await HomePage.headerSearchInput.setValue('engine')
        await HomePage.headerSearchResultFirst.click()
        await PdpPage.firstPdpProduct.isDisplayed()
        await PdpPage.firstPdpProduct.click()
        await browser.pause(5000)
    })
})

