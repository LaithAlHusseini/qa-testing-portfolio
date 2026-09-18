import { test } from '../fixtures/testFixtures';
import { users } from '../test-data/users';
import { checkoutData } from '../test-data/checkoutData';

test.describe('Checkout Tests', () => {

  test.beforeEach(async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
  }) => {
    await loginPage.goto();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await inventoryPage.expectLoaded();

    await inventoryPage.addBackpackToCart();
    await inventoryPage.expectCartCount('1');

    await inventoryPage.openCart();

    await cartPage.expectLoaded();
    await cartPage.expectBackpackVisible();

    await cartPage.startCheckout();

    await checkoutPage.expectInformationPage();
  });

  test('user can complete checkout successfully', async ({
    checkoutPage
  }) => {
    await checkoutPage.fillCustomerInformation(
      checkoutData.validCustomer.firstName,
      checkoutData.validCustomer.lastName,
      checkoutData.validCustomer.postalCode
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.expectOverviewPage();
    await checkoutPage.expectBackpackVisible();

    await checkoutPage.finishCheckout();

    await checkoutPage.expectOrderComplete();
  });

  test('checkout fails when postal code is missing', async ({
    checkoutPage
  }) => {
    await checkoutPage.fillCustomerInformation(
      checkoutData.validCustomer.firstName,
      checkoutData.validCustomer.lastName,
      ''
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.expectError(
      'Postal Code is required'
    );

    await checkoutPage.expectInformationPage();
  });

});