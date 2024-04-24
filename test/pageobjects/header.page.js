import { $ } from '@wdio/globals'
import Page from './page.js';


class HeaderComponent extends Page {

    get headerCartIcon() {
        return $('div.cart-menu.dropdown')
    }

    get headerCart_ViewCart_Button() {
        return $('button*=View Cart')
    }
}

export default new HeaderComponent();
