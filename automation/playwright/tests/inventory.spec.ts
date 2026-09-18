import { test, expect } from '@playwright/test';

test.describe('Inventory and Shopping Cart Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory/);
  });

  test('user can add a product to the cart', async ({ page }) => {
    await page
      .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    await expect(
      page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveText('1');

    await page
      .locator('[data-test="shopping-cart-link"]')
      .click();

    await expect(page).toHaveURL(/cart\.html/);

    await expect(
      page.locator('[data-test="inventory-item-name"]', {
        hasText: 'Sauce Labs Backpack'
      })
    ).toBeVisible();
  });

  test('user can remove a product from the cart', async ({ page }) => {
    await page
      .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    await expect(
      page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveText('1');

    await page
      .locator('[data-test="remove-sauce-labs-backpack"]')
      .click();

    await expect(
      page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveCount(0);
  });

});