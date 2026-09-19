import { test } from '../fixtures/testFixtures';

test.describe('Logout and Session Tests', () => {

  test('user can log out successfully', async ({
    inventoryPage,
    loginPage
  }) => {
    await inventoryPage.logout();

    await loginPage.expectLoaded();
  });

  test('logged out user cannot access inventory directly', async ({
    inventoryPage,
    loginPage
  }) => {
    await inventoryPage.logout();

    await loginPage.expectLoaded();

    await inventoryPage.goToInventoryDirectly();

    await loginPage.expectLoaded();

    await loginPage.expectError(
      "You can only access '/inventory.html' when you are logged in."
    );
  });

  test('authenticated session persists after page refresh', async ({
    inventoryPage
  }) => {
    await inventoryPage.reloadPage();

    await inventoryPage.expectLoaded();
  });

  test('logged out user cannot access cart directly', async ({
  inventoryPage,
  cartPage,
  loginPage
  }) => {
  await inventoryPage.logout();

  await loginPage.expectLoaded();

  await cartPage.goToCartDirectly();

  await loginPage.expectLoaded();

  await loginPage.expectError(
    "You can only access '/cart.html' when you are logged in."
  );
  });

  test('logged out user cannot access checkout directly', async ({
  inventoryPage,
  checkoutPage,
  loginPage
  }) => {
  await inventoryPage.logout();

  await loginPage.expectLoaded();

  await checkoutPage.goToCheckoutDirectly();

  await loginPage.expectLoaded();

  await loginPage.expectError(
    "You can only access '/checkout-step-one.html' when you are logged in."
  );
 });

});