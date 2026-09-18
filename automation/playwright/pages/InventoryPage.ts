import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly backpackAddButton: Locator;
  readonly backpackRemoveButton: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;

    this.backpackAddButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    this.backpackRemoveButton = page.locator(
      '[data-test="remove-sauce-labs-backpack"]'
    );

    this.cartLink = page.locator(
      '[data-test="shopping-cart-link"]'
    );

    this.cartBadge = page.locator(
      '[data-test="shopping-cart-badge"]'
    );
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/inventory\.html/, {
      timeout: 10000
    });

    await expect(this.backpackAddButton).toBeVisible({
      timeout: 10000
    });
  }

  async addBackpackToCart() {
    await this.backpackAddButton.click();
  }

  async removeBackpackFromCart() {
    await this.backpackRemoveButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async expectCartCount(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }

  async expectCartEmpty() {
    await expect(this.cartBadge).toHaveCount(0);
  }
}