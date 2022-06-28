import { Selector, t, ClientFunction } from 'testcafe';


export default class BasePage {
  constructor() {
    // Main URL
    this.url = `http://automationpractice.com`;
  }

  createRoute(route) {
    return `${this.url}${route}`;
  }

  getRandomInt(digits) {
    const randomInt = Math.floor(10 ** (digits - 1) + Math.random() * 9 ** digits).toString();
    return randomInt;
  }

}

export const basePage = new BasePage();
