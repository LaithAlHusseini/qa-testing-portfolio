import { test } from '../fixtures/testFixtures';
import { users } from '../test-data/users';

test.describe('Inventory and Shopping Cart Tests', () => {

  test.beforeEach(async ({
    loginPage,
    inventoryPage
  }) => {
    await loginPage.goto();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await inventoryPage.expectLoaded();
  });

  test('user can add a product to the cart', async ({
    inventoryPage,
    cartPage
  }) => {
    await inventoryPage.addBackpackToCart();

    await inventoryPage.expectCartCount('1');

    await inventoryPage.openCart();

    await cartPage.expectLoaded();
    await cartPage.expectBackpackVisible();
  });

  test('user can remove a product from the cart', async ({
    inventoryPage
  }) => {
    await inventoryPage.addBackpackToCart();

    await inventoryPage.expectCartCount('1');

    await inventoryPage.removeBackpackFromCart();

    await inventoryPage.expectCartEmpty();
  });

});