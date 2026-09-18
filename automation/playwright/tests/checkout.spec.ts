import { test, expect } from '@playwright/test';

test.describe('Checkout Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory\.html/);
  });

  test('user can complete checkout successfully', async ({ page }) => {

    // Add product to cart
    await page
      .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    await expect(
      page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveText('1');

    // Open cart
    await page
      .locator('[data-test="shopping-cart-link"]')
      .click();

    await expect(page).toHaveURL(/cart\.html/);

    await expect(
  page.locator('[data-test="inventory-item-name"]', {
    hasText: 'Sauce Labs Backpack'
  })
).toBeVisible({ timeout: 10000 });

    // Start checkout
    await page.locator('[data-test="checkout"]').click();

    await expect(page).toHaveURL(/checkout-step-one\.html/);

    // Enter customer information
    await page.locator('[data-test="firstName"]').fill('Laith');
    await page.locator('[data-test="lastName"]').fill('Al-Husseini');
    await page.locator('[data-test="postalCode"]').fill('11118');

    await page.locator('[data-test="continue"]').click();

    // Checkout overview
    await expect(page).toHaveURL(/checkout-step-two\.html/);

    await expect(
  page.locator('[data-test="inventory-item-name"]', {
    hasText: 'Sauce Labs Backpack'
  })
).toBeVisible({ timeout: 10000 });

    // Finish order
    await page.locator('[data-test="finish"]').click();

    // Order confirmation
    await expect(page).toHaveURL(/checkout-complete\.html/);

    await expect(
      page.locator('[data-test="complete-header"]')
    ).toHaveText('Thank you for your order!');
  });
test('checkout fails when postal code is missing', async ({ page }) => {

  await page
    .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click();

  await page
    .locator('[data-test="shopping-cart-link"]')
    .click();

  await page.locator('[data-test="checkout"]').click();

  await expect(page).toHaveURL(/checkout-step-one\.html/);

  await page.locator('[data-test="firstName"]').fill('Laith');
  await page.locator('[data-test="lastName"]').fill('Al-Husseini');

  // Leave postal code empty
  await page.locator('[data-test="continue"]').click();

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText('Postal Code is required');

  await expect(page).toHaveURL(/checkout-step-one\.html/);
});
});