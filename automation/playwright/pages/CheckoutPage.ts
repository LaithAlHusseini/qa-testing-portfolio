import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly errorMessage: Locator;
  readonly completeHeader: Locator;
  readonly backpackItem: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.locator(
      '[data-test="firstName"]'
    );

    this.lastNameInput = page.locator(
      '[data-test="lastName"]'
    );

    this.postalCodeInput = page.locator(
      '[data-test="postalCode"]'
    );

    this.continueButton = page.locator(
      '[data-test="continue"]'
    );

    this.finishButton = page.locator(
      '[data-test="finish"]'
    );

    this.errorMessage = page.locator(
      '[data-test="error"]'
    );

    this.completeHeader = page.locator(
      '[data-test="complete-header"]'
    );

    this.backpackItem = page.locator(
      '[data-test="inventory-item-name"]',
      { hasText: 'Sauce Labs Backpack' }
    );
  }

  async expectInformationPage() {
    await expect(this.page).toHaveURL(
      /checkout-step-one\.html/
    );
  }

  async fillCustomerInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

  async expectOverviewPage() {
    await expect(this.page).toHaveURL(
      /checkout-step-two\.html/
    );
  }

  async expectBackpackVisible() {
    await expect(this.backpackItem).toBeVisible({
      timeout: 10000
    });
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async expectOrderComplete() {
    await expect(this.page).toHaveURL(
      /checkout-complete\.html/
    );

    await expect(this.completeHeader).toHaveText(
      'Thank you for your order!'
    );
  }

  async expectError(message: string) {
    await expect(this.errorMessage).toContainText(message);
  }
}