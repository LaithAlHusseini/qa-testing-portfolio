# SauceDemo Test Cases

## Application Under Test

[SauceDemo](https://www.saucedemo.com/)

## Purpose

This document contains detailed functional test cases derived from the SauceDemo test scenarios.

---

# Authentication

## TC-001 — Login with Valid Credentials

**Related Scenario:** TS-001  
**Module:** Authentication  
**Priority:** Critical

**Preconditions:**
- User is on the SauceDemo login page.

**Test Data:**
- Username: `standard_user`
- Password: `secret_sauce`

**Steps:**
1. Enter the valid username.
2. Enter the valid password.
3. Click Login.

**Expected Result:**
- Login succeeds.
- User is redirected to the inventory page.

---

## TC-002 — Login with Invalid Password

**Related Scenario:** TS-002  
**Module:** Authentication  
**Priority:** High

**Preconditions:**
- User is on the login page.

**Test Data:**
- Username: `standard_user`
- Password: `wrong_password`

**Steps:**
1. Enter the valid username.
2. Enter an invalid password.
3. Click Login.

**Expected Result:**
- Login is rejected.
- An invalid credentials error message is displayed.
- User remains on the login page.

---

## TC-003 — Login with Empty Username

**Related Scenario:** TS-003  
**Module:** Authentication  
**Priority:** High

**Steps:**
1. Leave the username field empty.
2. Enter `secret_sauce` in the password field.
3. Click Login.

**Expected Result:**
- Login is rejected.
- `Username is required` validation is displayed.

---

## TC-004 — Login with Empty Password

**Related Scenario:** TS-004  
**Module:** Authentication  
**Priority:** High

**Steps:**
1. Enter `standard_user`.
2. Leave the password field empty.
3. Click Login.

**Expected Result:**
- Login is rejected.
- `Password is required` validation is displayed.

---

## TC-005 — Locked-Out User Login

**Related Scenario:** TS-005  
**Module:** Authentication  
**Priority:** High

**Test Data:**
- Username: `locked_out_user`
- Password: `secret_sauce`

**Steps:**
1. Enter the locked-out username.
2. Enter the valid password.
3. Click Login.

**Expected Result:**
- Login is rejected.
- A locked-out user error message is displayed.

---

## TC-006 — Logout Successfully

**Related Scenario:** TS-006  
**Module:** Authentication  
**Priority:** High

**Preconditions:**
- User is logged in.

**Steps:**
1. Open the application menu.
2. Select Logout.

**Expected Result:**
- User is logged out.
- User is redirected to the login page.

---

# Authorization & Session

## TC-007 — Access Inventory Directly After Logout

**Related Scenario:** TS-007  
**Module:** Authorization  
**Priority:** Critical

**Preconditions:**
- User has logged out.

**Steps:**
1. Navigate directly to `/inventory.html`.

**Expected Result:**
- Access is denied.
- User remains on or is redirected to the login page.
- An authentication-required error is displayed.

---

## TC-008 — Access Cart Directly After Logout

**Related Scenario:** TS-008  
**Module:** Authorization  
**Priority:** Critical

**Preconditions:**
- User has logged out.

**Steps:**
1. Navigate directly to `/cart.html`.

**Expected Result:**
- Access is denied.
- User is redirected to the login page.
- An authentication-required error is displayed.

---

## TC-009 — Access Checkout Directly After Logout

**Related Scenario:** TS-009  
**Module:** Authorization  
**Priority:** Critical

**Preconditions:**
- User has logged out.

**Steps:**
1. Navigate directly to `/checkout-step-one.html`.

**Expected Result:**
- Access is denied.
- User is redirected to the login page.
- An authentication-required error is displayed.

---

## TC-010 — Authenticated Session Persists After Refresh

**Related Scenario:** TS-010  
**Module:** Session  
**Priority:** High

**Preconditions:**
- User is logged in and viewing the inventory page.

**Steps:**
1. Refresh the browser page.

**Expected Result:**
- User remains authenticated.
- Inventory page remains accessible.

---

# Inventory

## TC-011 — Add Product to Cart

**Related Scenario:** TS-011  
**Module:** Inventory  
**Priority:** Critical

**Preconditions:**
- User is logged in.

**Steps:**
1. Locate Sauce Labs Backpack.
2. Click Add to Cart.

**Expected Result:**
- Product is added to the cart.
- Shopping cart badge displays `1`.

---

## TC-012 — Remove Product from Inventory

**Related Scenario:** TS-012  
**Module:** Inventory  
**Priority:** High

**Preconditions:**
- Sauce Labs Backpack has been added to the cart.

**Steps:**
1. Click Remove for Sauce Labs Backpack.

**Expected Result:**
- Product is removed from the cart.
- Shopping cart badge no longer displays the removed item.

---

## TC-013 — Add Multiple Products

**Related Scenario:** TS-013  
**Module:** Inventory  
**Priority:** High

**Steps:**
1. Add Sauce Labs Backpack to the cart.
2. Add Sauce Labs Bike Light to the cart.

**Expected Result:**
- Both products are added.
- Cart badge displays `2`.

---

## TC-014 — Validate Cart Badge Count

**Related Scenario:** TS-014  
**Module:** Inventory  
**Priority:** High

**Steps:**
1. Add one product.
2. Verify the cart badge.
3. Add another product.
4. Verify the cart badge again.

**Expected Result:**
- Badge accurately reflects the number of products currently in the cart.

---

## TC-015 — Cart Persists After Refresh

**Related Scenario:** TS-015  
**Module:** State Management  
**Priority:** High

**Steps:**
1. Add Sauce Labs Backpack to the cart.
2. Confirm badge displays `1`.
3. Refresh the page.
4. Open the shopping cart.

**Expected Result:**
- Badge still displays `1`.
- Added product remains in the shopping cart.

---

# Product Sorting

## TC-016 — Sort Products A to Z

**Related Scenario:** TS-016  
**Module:** Inventory  
**Priority:** Medium

**Steps:**
1. Open the product sorting dropdown.
2. Select Name (A to Z).

**Expected Result:**
- Product names are displayed in ascending alphabetical order.

---

## TC-017 — Sort Products Z to A

**Related Scenario:** TS-017  
**Module:** Inventory  
**Priority:** Medium

**Steps:**
1. Open the product sorting dropdown.
2. Select Name (Z to A).

**Expected Result:**
- Product names are displayed in descending alphabetical order.

---

## TC-018 — Sort Products by Price Low to High

**Related Scenario:** TS-018  
**Module:** Inventory  
**Priority:** Medium

**Steps:**
1. Open the product sorting dropdown.
2. Select Price (low to high).

**Expected Result:**
- Products are ordered from the lowest price to the highest price.

---

## TC-019 — Sort Products by Price High to Low

**Related Scenario:** TS-019  
**Module:** Inventory  
**Priority:** Medium

**Steps:**
1. Open the product sorting dropdown.
2. Select Price (high to low).

**Expected Result:**
- Products are ordered from the highest price to the lowest price.

---

# Product Details

## TC-020 — Open Product Details

**Related Scenario:** TS-020  
**Module:** Product  
**Priority:** Medium

**Steps:**
1. Locate Sauce Labs Backpack.
2. Click the product name.

**Expected Result:**
- Product details page opens.

---

## TC-021 — Verify Product Information

**Related Scenario:** TS-021  
**Module:** Product  
**Priority:** High

**Preconditions:**
- Sauce Labs Backpack details page is open.

**Steps:**
1. Verify the product name.
2. Verify the description.
3. Verify the price.

**Expected Result:**
- Correct product information is displayed.
- Product name is `Sauce Labs Backpack`.
- Description and price are visible.

---

## TC-022 — Return to Inventory

**Related Scenario:** TS-022  
**Module:** Product Navigation  
**Priority:** Medium

**Preconditions:**
- User is viewing a product details page.

**Steps:**
1. Click Back to Products.

**Expected Result:**
- User returns to the inventory page.
- Product listing is displayed.

---

# Shopping Cart

## TC-023 — Verify Product in Cart

**Related Scenario:** TS-023  
**Module:** Shopping Cart  
**Priority:** Critical

**Steps:**
1. Add Sauce Labs Backpack.
2. Open the shopping cart.

**Expected Result:**
- Sauce Labs Backpack appears in the cart.

---

## TC-024 — Remove Product from Cart

**Related Scenario:** TS-024  
**Module:** Shopping Cart  
**Priority:** High

**Preconditions:**
- Shopping cart contains Sauce Labs Backpack.

**Steps:**
1. Open the shopping cart.
2. Click Remove for Sauce Labs Backpack.

**Expected Result:**
- Sauce Labs Backpack disappears from the cart.

---

## TC-025 — Verify Remaining Product After Removal

**Related Scenario:** TS-025  
**Module:** Shopping Cart  
**Priority:** High

**Preconditions:**
- Cart contains Sauce Labs Backpack and Sauce Labs Bike Light.

**Steps:**
1. Open the cart.
2. Remove Sauce Labs Backpack.

**Expected Result:**
- Sauce Labs Backpack is removed.
- Sauce Labs Bike Light remains.
- Cart badge displays `1`.

---

## TC-026 — Continue Shopping from Cart

**Related Scenario:** TS-026  
**Module:** Shopping Cart  
**Priority:** Medium

**Steps:**
1. Add Sauce Labs Backpack.
2. Open the shopping cart.
3. Click Continue Shopping.

**Expected Result:**
- User returns to inventory.
- Existing cart state is preserved.
- Badge still displays `1`.

---

# Checkout

## TC-027 — Complete Checkout Successfully

**Related Scenario:** TS-027  
**Module:** Checkout  
**Priority:** Critical

**Preconditions:**
- Shopping cart contains Sauce Labs Backpack.

**Test Data:**
- First Name: `Laith`
- Last Name: `Al-Husseini`
- Postal Code: `11118`

**Steps:**
1. Open the cart.
2. Click Checkout.
3. Enter valid customer information.
4. Click Continue.
5. Review the order.
6. Click Finish.

**Expected Result:**
- Checkout completes successfully.
- Order confirmation page is displayed.
- `Thank you for your order!` is displayed.

---

## TC-028 — Checkout Without First Name

**Related Scenario:** TS-028  
**Module:** Checkout  
**Priority:** High

**Steps:**
1. Start checkout.
2. Leave First Name empty.
3. Enter valid Last Name.
4. Enter valid Postal Code.
5. Click Continue.

**Expected Result:**
- Checkout does not continue.
- `First Name is required` is displayed.

---

## TC-029 — Checkout Without Last Name

**Related Scenario:** TS-029  
**Module:** Checkout  
**Priority:** High

**Steps:**
1. Start checkout.
2. Enter a valid First Name.
3. Leave Last Name empty.
4. Enter a valid Postal Code.
5. Click Continue.

**Expected Result:**
- Checkout does not continue.
- `Last Name is required` is displayed.

---

## TC-030 — Checkout Without Postal Code

**Related Scenario:** TS-030  
**Module:** Checkout  
**Priority:** High

**Steps:**
1. Start checkout.
2. Enter a valid First Name.
3. Enter a valid Last Name.
4. Leave Postal Code empty.
5. Click Continue.

**Expected Result:**
- Checkout does not continue.
- `Postal Code is required` is displayed.

---

## TC-031 — Verify Checkout Overview

**Related Scenario:** TS-031  
**Module:** Checkout  
**Priority:** High

**Preconditions:**
- Sauce Labs Backpack is in the cart.
- Valid checkout information has been entered.

**Steps:**
1. Continue to the checkout overview page.
2. Review the displayed product.

**Expected Result:**
- Checkout overview page is displayed.
- Sauce Labs Backpack is present in the order.

---

## TC-032 — Complete Order and Verify Confirmation

**Related Scenario:** TS-032  
**Module:** Checkout  
**Priority:** Critical

**Preconditions:**
- User has reached the checkout overview page.

**Steps:**
1. Click Finish.

**Expected Result:**
- Checkout completion page appears.
- Successful order confirmation is displayed.

---

# Application State

## TC-033 — Reset Application State

**Related Scenario:** TS-033  
**Module:** State Management  
**Priority:** Medium

**Preconditions:**
- User is logged in.
- Shopping cart contains multiple products.

**Steps:**
1. Verify cart contains two products.
2. Open the application menu.
3. Select Reset App State.

**Expected Result:**
- Cart state is cleared.
- Shopping cart badge disappears.
- User remains on the inventory page.