import { t } from 'testcafe';

export default class Assertions {
  constructor() {
  }
  async noErrorsInConsoleLog() {
    const { error } = await t.getBrowserConsoleMessages();

    if (Array.isArray(error) && error.length) {
      console.log('Console Errors: ');
      console.log(error);
    }
    await t.expect(error[0]).notOk();
  }
}

export const assertions = new Assertions();