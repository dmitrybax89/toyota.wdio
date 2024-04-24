import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckoutPage extends Page {

    get emailInput() {
        return $('#guestEmailInputId')
    }

    get deliveryOptions_inStorePickup() {
        return $('select-deliver')
    }

}

export default new CheckoutPage();