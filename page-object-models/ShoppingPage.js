import { Selector, t, ClientFunction } from 'testcafe';
import BasePage from './BasePage';

export default class ShoppingPage extends BasePage {
  constructor() {
    super();
    this.womenClothesTab = Selector('#block_top_menu > ul').find('li').nth(0)
    this.womenDresses = Selector('#subcategories > ul').find('li').nth(1)
    this.firstDressOnList = Selector('#center_column > ul').find('li').nth(0)
    this.viewFirstDress = Selector('.quick-view')
    this.proceedToCheckout = Selector('a[title="Proceed to checkout"]').withText('Proceed to checkout')
    this.summaryCartCheckOutButton = Selector('.button.btn.btn-default.standard-checkout.button-medium')
    this.addressCheckoutButton = Selector('button[name="processAddress"]')
    this.shippingCheckoutButton = Selector('button[name="processCarrier"]')
    this.shoppingCartSummaryText = Selector('#cart_title')
    this.selectSizeDropDown = Selector('div.#uniform-group_1')
    this.agreeToTermofService = Selector('input[type="checkbox"]')
    this.orderSuccessMessage = Selector('.alert.alert-success').withText('Your order on My Store is complete.')
    this.confirmOrder = Selector('button[type="submit"]').withText('I confirm my order')
    this.paymentOption = (paymentOption) => Selector(`.${paymentOption}`)
    this.confirmAddress = (address) => Selector('.address.item.box').find('li').withText(address)
    this.selectSize = (value) => this.selectSizeDropDown.find('select').find('option').withText(value)
    this.addToCartFromViewPage = (value) => Selector('.button.ajax_add_to_cart_button.btn.btn-default').nth(value) //the index represents the item 
    this.addToCart = Selector('p[id="add_to_cart"]')
    this.successAddToCartModal = Selector('.icon-ok').withText('Product successfully added to your shopping cart')
  }
}

export const shoppingPage = new ShoppingPage();