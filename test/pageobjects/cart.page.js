import { $ } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {

    get checkout_button () {
        return $('a*=Check Out')
    }

    get continue_as_guest_button () {
        return $('button*=Continue')
    }


}

export default new CartPage();