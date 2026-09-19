import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  readonly backpackAddButton: Locator;
  readonly backpackRemoveButton: Locator;
  readonly backpackName: Locator;
  readonly bikeLightAddButton: Locator;

  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  readonly sortDropdown: Locator;
  readonly productNames: Locator;
  readonly productPrices: Locator;

  readonly menuButton: Locator;
  readonly logoutLink: Locator;
  readonly menuPanel: Locator;

  constructor(page: Page) {
    this.page = page;

    this.backpackAddButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    this.backpackRemoveButton = page.locator(
      '[data-test="remove-sauce-labs-backpack"]'
    );

    this.backpackName = page.locator(
      '[data-test="inventory-item-name"]',
      { hasText: 'Sauce Labs Backpack' }
    );

    this.bikeLightAddButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]'
    );

    this.cartLink = page.locator(
      '[data-test="shopping-cart-link"]'
    );

    this.cartBadge = page.locator(
      '[data-test="shopping-cart-badge"]'
    );

    this.sortDropdown = page.locator(
      '[data-test="product-sort-container"]'
    );

    this.productNames = page.locator(
      '[data-test="inventory-item-name"]'
    );

    this.productPrices = page.locator(
      '[data-test="inventory-item-price"]'
    );

    this.menuButton = page.getByRole('button', {
      name: 'Open Menu'
    });

    this.logoutLink = page.locator(
      '[data-test="logout-sidebar-link"]'
    );

    this.menuPanel = page.locator(
      '.bm-menu-wrap'
    );
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(
      /inventory\.html/,
      {
        timeout: 10000
      }
    );

    await expect(this.sortDropdown).toBeVisible({
      timeout: 10000
    });
  }

  async addBackpackToCart() {
    await this.backpackAddButton.click();
  }

  async removeBackpackFromCart() {
    await this.backpackRemoveButton.click();
  }

  async addBikeLightToCart() {
    await this.bikeLightAddButton.click();
  }

  async openBackpackDetails() {
    await this.backpackName.click();
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

  async sortBy(value: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.sortDropdown.selectOption(value);

    await expect(this.sortDropdown).toHaveValue(value);
  }

  async expectNamesSortedAscending() {
    const names = await this.productNames.allTextContents();

    const sortedNames = [...names].sort((a, b) =>
      a.localeCompare(b)
    );

    expect(names).toEqual(sortedNames);
  }

  async expectNamesSortedDescending() {
    const names = await this.productNames.allTextContents();

    const sortedNames = [...names].sort((a, b) =>
      b.localeCompare(a)
    );

    expect(names).toEqual(sortedNames);
  }

  async expectPricesSortedLowToHigh() {
    const prices = (
      await this.productPrices.allTextContents()
    ).map(price =>
      Number(price.replace('$', ''))
    );

    const sortedPrices = [...prices].sort(
      (a, b) => a - b
    );

    expect(prices).toEqual(sortedPrices);
  }

  async expectPricesSortedHighToLow() {
    const prices = (
      await this.productPrices.allTextContents()
    ).map(price =>
      Number(price.replace('$', ''))
    );

    const sortedPrices = [...prices].sort(
      (a, b) => b - a
    );

    expect(prices).toEqual(sortedPrices);
  }

  async reloadPage() {
    await this.page.reload();

    await this.expectLoaded();
  }

  async openMenu() {
    await this.menuButton.click();

    await expect(this.menuPanel).toHaveAttribute(
      'aria-hidden',
      'false',
      {
        timeout: 10000
      }
    );

    await expect(this.logoutLink).toHaveCount(1);
  }

  async logout() {
    await this.openMenu();

    await this.logoutLink.dispatchEvent('click');

    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/',
      {
        timeout: 10000
      }
    );
  }

  async goToInventoryDirectly() {
    await this.page.goto(
      'https://www.saucedemo.com/inventory.html'
    );
  }
}