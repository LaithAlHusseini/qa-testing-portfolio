import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.describe('Inventory and Shopping Cart Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.expectLoaded();
  });

  test('user can add a product to the cart', async () => {
    await inventoryPage.addBackpackToCart();

    await inventoryPage.expectCartCount('1');

    await inventoryPage.openCart();

    await cartPage.expectLoaded();
    await cartPage.expectBackpackVisible();
  });

  test('user can remove a product from the cart', async () => {
    await inventoryPage.addBackpackToCart();

    await inventoryPage.expectCartCount('1');

    await inventoryPage.removeBackpackFromCart();

    await inventoryPage.expectCartEmpty();
  });
});