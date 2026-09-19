import {
  test as base,
  expect,
  type Page
} from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users } from '../test-data/users';

type TestFixtures = {
  loginPage: LoginPage;
  authenticatedPage: Page;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  checkoutReadyPage: CheckoutPage;
};

export const test = base.extend<TestFixtures>({

  // Used by login tests without authentication
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  // Automatically logs in standard user
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await inventoryPage.expectLoaded();

    await use(page);
  },

  inventoryPage: async ({ authenticatedPage }, use) => {
    await use(
      new InventoryPage(authenticatedPage)
    );
  },

  cartPage: async ({ authenticatedPage }, use) => {
    await use(
      new CartPage(authenticatedPage)
    );
  },

  checkoutPage: async ({ authenticatedPage }, use) => {
    await use(
      new CheckoutPage(authenticatedPage)
    );
  },
checkoutReadyPage: async ({
  inventoryPage,
  cartPage,
  checkoutPage
}, use) => {
  await inventoryPage.addBackpackToCart();
  await inventoryPage.expectCartCount('1');

  await inventoryPage.openCart();

  await cartPage.expectLoaded();
  await cartPage.expectBackpackVisible();

  await cartPage.startCheckout();

  await checkoutPage.expectInformationPage();

  await use(checkoutPage);
},
});

export { expect };