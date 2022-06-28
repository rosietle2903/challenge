Automated tests for: http://automationpractice.com/

How to run the tests

Install TestCafe by doing `npm install -g testcafe`: https://testcafe.io/documentation/402834/guides/basic-guides/install-testcafe

Navigate to the directory where the tests reside and run `testcafe chrome <TEST-CASE>` (NOTE: browsers can be specified there as Firefox, etc) 


Tests

This smoke test suite provides coverage for the following features on the page:

Users
- Users are able to create a user 
- Users are able to sign in 
- Users are able to sign as a specified user 
- Users are able to purchase a dress
  - Users are able to confirm their address upon checkout 
  - Users are able to checkout 
  - Users are on the correct route when navigating through the checkout 
  - Users are able select a dress of choice
