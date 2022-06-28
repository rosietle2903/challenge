import { usersPage } from '../../page-object-models/UsersPage';
import { assertions } from '../../test-utils/Assertions';
import { Selector, t, ClientFunction } from 'testcafe';

fixture`Users Actions`
  .afterEach(assertions.noErrorsInConsoleLog);

test('Users are able to create an account', async (t) => {
    // When I navigate to the page
    // And click Sign In 
    // Then I see the option to create an account 
    // Then I am able to successfully get to the form to fill out users information
    await t 
    usersPage.createAnAccount();
});

test('Users can login to an existing account', async (t) => {
    // When I navigate to the page
    // And click Sign In 
    // Then I sign in with my credentials 
    // Then I am able to successfully sign in 
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
    .contains('/index.php?controller=my-account', { timeout: 50000 })
});