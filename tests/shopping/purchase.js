import { shoppingPage } from '../../page-object-models/ShoppingPage';
import { usersPage } from '../../page-object-models/UsersPage';
import { assertions } from '../../test-utils/Assertions';
import { Selector, t, ClientFunction } from 'testcafe';

fixture`Shopping`
  .afterEach(assertions.noErrorsInConsoleLog);

test('Users are able to checkout a chosen dress', async (t) => {
    // When I navigate to the page
    // And click Sign In 
    // Then I see the option to create an account 
    // Then I am able to successfully get to the form to fill out users information
    // Then I click on Women's clothes tab
    // And I ensure I am on the right tab
    // Then I select size M dress
    // And I am able to purchase an outfit 
    const username = 'qatestingchallenge@gmail.com'
    const pass = 'testing123'
    const getURL = ClientFunction(() => document.location.href)
    await t
    .navigateTo(usersPage.url)
    .click(usersPage.signInButton)
    .typeText(usersPage.signInToPersonalAccountField, username)
    .typeText(usersPage.signInToPersonalPass, pass)
    .click(usersPage.submitLogin, { timeout: 50000 })
    .expect(getURL())
    .contains('/index.php?controller=my-account', { timeout: 90000 })
    .click(shoppingPage.womenClothesTab)
    .click(shoppingPage.womenDresses)
    .wait(2000)
    .doubleClick(shoppingPage.firstDressOnList, { timeout: 20000 })
    .click(shoppingPage.addToCartFromViewPage(0))
    .click(shoppingPage.proceedToCheckout)
    .expect(shoppingPage.shoppingCartSummaryText.textContent).contains('Shopping-cart summary')
    await t 
    .click(shoppingPage.summaryCartCheckOutButton)
    // I confirm my address
    .expect(shoppingPage.confirmAddress('1111 testing 123').textContent).ok()
    .expect(shoppingPage.confirmAddress('fairfax, Alabama 22031').exists).ok()
    .expect(shoppingPage.confirmAddress('United States').exists).ok()
    .expect(shoppingPage.confirmAddress('555-555-555').exists).ok()
    // I proceed to checkout
    .click(shoppingPage.addressCheckoutButton)
    .click(shoppingPage.agreeToTermofService)
    .click(shoppingPage.shippingCheckoutButton)
    .click(shoppingPage.paymentOption('cheque'))
    .click(shoppingPage.confirmOrder)
    .expect(shoppingPage.orderSuccessMessage.exists).ok()
});
