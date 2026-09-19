import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  readonly backpackItem: Locator;
  readonly bikeLightItem: Locator;

  readonly backpackRemoveButton: Locator;
  readonly cartBadge: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.backpackItem = page.locator(
      '[data-test="inventory-item-name"]',
      { hasText: 'Sauce Labs Backpack' }
    );

    this.bikeLightItem = page.locator(
      '[data-test="inventory-item-name"]',
      { hasText: 'Sauce Labs Bike Light' }
    );
    this.continueShoppingButton = page.locator(
       '[data-test="continue-shopping"]'
    );

    this.backpackRemoveButton = page.locator(
      '[data-test="remove-sauce-labs-backpack"]'
    );

    this.cartBadge = page.locator(
      '[data-test="shopping-cart-badge"]'
    );

    this.checkoutButton = page.locator(
      '[data-test="checkout"]'
    );
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(
      /cart\.html/,
      { timeout: 10000 }
    );
  }

  async expectBackpackVisible() {
    await expect(this.backpackItem).toBeVisible({
      timeout: 10000
    });
  }

  async expectBikeLightVisible() {
    await expect(this.bikeLightItem).toBeVisible({
      timeout: 10000
    });
  }

  async removeBackpack() {
    await this.backpackRemoveButton.click();
  }

  async expectBackpackRemoved() {
    await expect(this.backpackItem).toHaveCount(0);
  }

  async expectCartCount(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }

  async goToCartDirectly() {
   await this.page.goto(
    'https://www.saucedemo.com/cart.html'
  );
  }
  
  async continueShopping() {
   await this.continueShoppingButton.click();
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }
}