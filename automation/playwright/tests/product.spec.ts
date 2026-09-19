import { test } from '../fixtures/testFixtures';

test.describe('Product Details Tests', () => {

  test('user can open product details', async ({
    inventoryPage,
    productPage
  }) => {
    await inventoryPage.openBackpackDetails();

    await productPage.expectLoaded();
    await productPage.expectBackpackDetails();
  });

  test('user can return from product details to inventory', async ({
    inventoryPage,
    productPage
  }) => {
    await inventoryPage.openBackpackDetails();

    await productPage.expectLoaded();

    await productPage.backToProducts();

    await inventoryPage.expectLoaded();
  });

});