import { test } from '../fixtures/testFixtures';

test.describe('Inventory and Shopping Cart Tests', () => {

  test('user can add a product to the cart', async ({
    inventoryPage,
    cartPage
  }) => {
    await inventoryPage.addBackpackToCart();

    await inventoryPage.expectCartCount('1');

    await inventoryPage.openCart();

    await cartPage.expectLoaded();
    await cartPage.expectBackpackVisible();
  });

  test('user can remove a product from the cart', async ({
    inventoryPage
  }) => {
    await inventoryPage.addBackpackToCart();

    await inventoryPage.expectCartCount('1');

    await inventoryPage.removeBackpackFromCart();

    await inventoryPage.expectCartEmpty();
  });

  test('user can sort products by name A to Z', async ({
    inventoryPage
  }) => {
    await inventoryPage.sortBy('az');
    await inventoryPage.expectNamesSortedAscending();
  });

  test('user can sort products by name Z to A', async ({
    inventoryPage
  }) => {
    await inventoryPage.sortBy('za');
    await inventoryPage.expectNamesSortedDescending();
  });

  test('user can sort products by price low to high', async ({
    inventoryPage
  }) => {
    await inventoryPage.sortBy('lohi');
    await inventoryPage.expectPricesSortedLowToHigh();
  });

  test('user can sort products by price high to low', async ({
    inventoryPage
  }) => {
    await inventoryPage.sortBy('hilo');
    await inventoryPage.expectPricesSortedHighToLow();
  });
  test('shopping cart persists after page refresh', async ({
  inventoryPage,
  cartPage
  }) => {
  await inventoryPage.addBackpackToCart();

  await inventoryPage.expectCartCount('1');

  await inventoryPage.reloadPage();

  await inventoryPage.expectCartCount('1');

  await inventoryPage.openCart();

  await cartPage.expectLoaded();
  await cartPage.expectBackpackVisible();
   });

 test('user can add multiple products to the cart', async ({
  inventoryPage,
  cartPage
 }) => {
  await inventoryPage.addBackpackToCart();
  await inventoryPage.addBikeLightToCart();

  await inventoryPage.expectCartCount('2');

  await inventoryPage.openCart();

  await cartPage.expectLoaded();
  await cartPage.expectBackpackVisible();
  await cartPage.expectBikeLightVisible();
 });

  test('user can remove a product from the cart page', async ({
  inventoryPage,
  cartPage
 }) => {
  await inventoryPage.addBackpackToCart();
  await inventoryPage.addBikeLightToCart();

  await inventoryPage.expectCartCount('2');

  await inventoryPage.openCart();

  await cartPage.expectLoaded();

  await cartPage.removeBackpack();

  await cartPage.expectBackpackRemoved();
  await cartPage.expectBikeLightVisible();
  await cartPage.expectCartCount('1');
  });

  test('user can continue shopping from the cart', async ({
  inventoryPage,
  cartPage
  }) => {
  await inventoryPage.addBackpackToCart();

  await inventoryPage.expectCartCount('1');

  await inventoryPage.openCart();

  await cartPage.expectLoaded();
  await cartPage.expectBackpackVisible();

  await cartPage.continueShopping();

  await inventoryPage.expectLoaded();
  await inventoryPage.expectCartCount('1');
 });
   test('user can reset application state', async ({
  inventoryPage
 }) => {
  await inventoryPage.addBackpackToCart();
  await inventoryPage.addBikeLightToCart();

  await inventoryPage.expectCartCount('2');

  await inventoryPage.resetAppState();

  await inventoryPage.expectCartEmpty();

  await inventoryPage.expectLoaded();
 });
  
});