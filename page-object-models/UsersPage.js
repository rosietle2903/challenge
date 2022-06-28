import { Selector, t, ClientFunction } from 'testcafe';
import BasePage from './BasePage';

export default class UsersPage extends BasePage {
  constructor() {
    super();
    this.signInButton = Selector('.login');
    this.emailAddressField = Selector('input[id="email_create"]')
    this.createAnAccountButton = Selector('button[id="SubmitCreate"]').withText('Create an account')
    this.signInToPersonalAccountField = Selector('input[id="email"]')
    this.signInToPersonalPass = Selector('input[id="passwd"]')
    this.submitLogin = Selector('button[name="SubmitLogin"]')

  }

  async createAnAccount() { 
    const uniqueVal = usersPage.getRandomInt(10)
    const emailValue = `newEmail${uniqueVal}`
    await t
    .navigateTo(usersPage.url)
    .click(usersPage.signInButton)
    .typeText(usersPage.emailAddressField, `${emailValue}@gmail.com`)
    .click(usersPage.createAnAccountButton)
  }
}

export const usersPage = new UsersPage();