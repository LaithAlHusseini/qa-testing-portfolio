import { test } from '../fixtures/testFixtures';
import { checkoutData } from '../test-data/checkoutData';

test.describe('Checkout Tests', () => {

  test('user can complete checkout successfully', async ({
    checkoutReadyPage
  }) => {
    await checkoutReadyPage.fillCustomerInformation(
      checkoutData.validCustomer.firstName,
      checkoutData.validCustomer.lastName,
      checkoutData.validCustomer.postalCode
    );

    await checkoutReadyPage.continueCheckout();

    await checkoutReadyPage.expectOverviewPage();
    await checkoutReadyPage.expectBackpackVisible();

    await checkoutReadyPage.finishCheckout();

    await checkoutReadyPage.expectOrderComplete();
  });

  test('checkout fails when postal code is missing', async ({
    checkoutReadyPage
  }) => {
    await checkoutReadyPage.fillCustomerInformation(
      checkoutData.validCustomer.firstName,
      checkoutData.validCustomer.lastName,
      ''
    );

    await checkoutReadyPage.continueCheckout();

    await checkoutReadyPage.expectError(
      'Postal Code is required'
    );

    await checkoutReadyPage.expectInformationPage();
  });
  test('checkout fails when first name is missing', async ({
  checkoutReadyPage
  }) => {
  await checkoutReadyPage.fillCustomerInformation(
    '',
    checkoutData.validCustomer.lastName,
    checkoutData.validCustomer.postalCode
  );

   await checkoutReadyPage.continueCheckout();

   await checkoutReadyPage.expectError(
    'First Name is required'
  );

  await checkoutReadyPage.expectInformationPage();
  });

   test('checkout fails when last name is missing', async ({
   checkoutReadyPage
  }) => {
   await checkoutReadyPage.fillCustomerInformation(
    checkoutData.validCustomer.firstName,
    '',
    checkoutData.validCustomer.postalCode
  );

   await checkoutReadyPage.continueCheckout();

  await checkoutReadyPage.expectError(
    'Last Name is required'
  );

  await checkoutReadyPage.expectInformationPage();
 });
});