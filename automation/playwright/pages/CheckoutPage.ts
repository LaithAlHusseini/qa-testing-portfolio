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
    /checkout-step-one\.html/,
    { timeout: 15000 }
  );

  await expect(this.firstNameInput).toBeVisible({
    timeout: 10000
  });

  await expect(this.lastNameInput).toBeVisible({
    timeout: 10000
  });

  await expect(this.postalCodeInput).toBeVisible({
    timeout: 10000
  });

  await expect(this.continueButton).toBeVisible({
    timeout: 10000
  });
}

  async fillCustomerInformation(
  firstName: string,
  lastName: string,
  postalCode: string
) {
  await this.firstNameInput.fill(firstName);
  await expect(this.firstNameInput).toHaveValue(firstName);

  await this.lastNameInput.fill(lastName);
  await expect(this.lastNameInput).toHaveValue(lastName);

  await this.postalCodeInput.fill(postalCode);
  await expect(this.postalCodeInput).toHaveValue(postalCode);

  // Ensure the last field commits its value before continuing
  await this.postalCodeInput.press('Tab');
}

  async continueCheckout() {
  await expect(this.continueButton).toBeVisible();
  await expect(this.continueButton).toBeEnabled();

  await this.continueButton.click();
}

  async goToCheckoutDirectly() {
   await this.page.goto(
    'https://www.saucedemo.com/checkout-step-one.html'
  );
}

  async expectOverviewPage() {
  await expect(this.page).toHaveURL(
    /checkout-step-two\.html/,
    { timeout: 15000 }
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