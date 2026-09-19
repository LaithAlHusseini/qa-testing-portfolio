import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productName: Locator;
  readonly productDescription: Locator;
  readonly productPrice: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productName = page.locator(
      '.inventory_details [data-test="inventory-item-name"]'
    );

    this.productDescription = page.locator(
      '.inventory_details [data-test="inventory-item-desc"]'
    );

    this.productPrice = page.locator(
      '.inventory_details [data-test="inventory-item-price"]'
    );

    this.backButton = page.locator(
      '[data-test="back-to-products"]'
    );
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(
      /inventory-item\.html/,
      {
        timeout: 10000
      }
    );

    await expect(this.backButton).toBeVisible({
      timeout: 10000
    });

    await expect(this.productName).toBeVisible({
      timeout: 10000
    });
  }

  async expectBackpackDetails() {
    await expect(this.productName).toHaveText(
      'Sauce Labs Backpack'
    );

    await expect(this.productDescription).toBeVisible();

    await expect(this.productPrice).toBeVisible();
  }

  async backToProducts() {
    await this.backButton.click();
  }
}