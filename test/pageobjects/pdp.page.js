import { $ } from '@wdio/globals'
import Page from './page.js';

class PdpPage extends Page {

    get firstPdpProduct() {
        return $('li.search-product-card')
    }

    get addToCartButton() {
        return $('button*=Add to Cart')
    }

}

export default new PdpPage();