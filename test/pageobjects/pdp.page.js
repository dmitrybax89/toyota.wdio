import { $ } from '@wdio/globals'
import Page from './page.js';

class PdpPage extends Page {

    get firstPdpProduct() {
        return $('ul > li:nth-child(1)')
    }

}

export default new PdpPage();