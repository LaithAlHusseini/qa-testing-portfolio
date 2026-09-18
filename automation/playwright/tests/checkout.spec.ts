import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users } from '../test-data/users';
import { checkoutData } from '../test-data/checkoutData';

test.describe('Checkout Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

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

  test('user can complete checkout successfully', async () => {
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

  test('checkout fails when postal code is missing', async () => {
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