# SauceDemo Bug Reports

## Application Under Test

[SauceDemo](https://www.saucedemo.com/)

## Purpose

This document contains structured sample defect reports based on SauceDemo workflows.

These defects are intentionally documented as simulated QA examples for portfolio demonstration. They are not presented as confirmed production defects in the current SauceDemo version.

The objective is to demonstrate professional defect reporting including severity, priority, environment, reproduction steps, expected behavior, actual behavior, and impact.

---

# BUG-001 — Shopping Cart Badge Does Not Update After Removing a Product

**Module:** Shopping Cart  
**Severity:** High  
**Priority:** High  
**Status:** Open  
**Type:** Functional  
**Reproducibility:** Always  

## Environment

- Application: SauceDemo Web Application
- Platform: Web
- Browser: Chromium
- Operating System: Windows 11

## Preconditions

- User is logged in as `standard_user`.
- Sauce Labs Backpack and Sauce Labs Bike Light are in the shopping cart.
- Shopping cart badge displays `2`.

## Steps to Reproduce

1. Log in using `standard_user`.
2. Add Sauce Labs Backpack to the cart.
3. Add Sauce Labs Bike Light to the cart.
4. Open the shopping cart.
5. Remove Sauce Labs Backpack.
6. Observe the shopping cart badge.

## Expected Result

- Sauce Labs Backpack is removed.
- Sauce Labs Bike Light remains in the cart.
- Shopping cart badge updates from `2` to `1`.

## Actual Result

- Sauce Labs Backpack is removed.
- Sauce Labs Bike Light remains in the cart.
- Shopping cart badge incorrectly continues displaying `2`.

## Impact

The cart badge no longer reflects the actual shopping cart state.

This may confuse users and reduces confidence in the accuracy of the shopping cart.

---

# BUG-002 — Product Sorting Does Not Follow Selected Price Order

**Module:** Inventory  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Open  
**Type:** Functional  
**Reproducibility:** Always  

## Environment

- Application: SauceDemo Web Application
- Platform: Web
- Browser: Firefox
- Operating System: Windows 11

## Preconditions

- User is logged in as `standard_user`.
- User is on the inventory page.

## Steps to Reproduce

1. Open the product sorting dropdown.
2. Select `Price (low to high)`.
3. Review the order of displayed product prices.

## Expected Result

Products should be ordered from the lowest price to the highest price.

Example:

`$7.99 → $9.99 → $15.99 → ...`

## Actual Result

One or more products are displayed outside the expected ascending price order.

## Impact

Users cannot reliably sort products based on price.

This may negatively affect product comparison and shopping decisions.

---

# BUG-003 — Checkout Continues When Postal Code Is Empty

**Module:** Checkout  
**Severity:** High  
**Priority:** High  
**Status:** Open  
**Type:** Validation  
**Reproducibility:** Always  

## Environment

- Application: SauceDemo Web Application
- Platform: Web
- Browser: WebKit
- Operating System: Windows 11

## Preconditions

- User is logged in as `standard_user`.
- Shopping cart contains at least one product.
- User has opened the checkout information page.

## Steps to Reproduce

1. Enter a valid First Name.
2. Enter a valid Last Name.
3. Leave Postal Code empty.
4. Click Continue.

## Expected Result

- Checkout should not continue.
- User should remain on the checkout information page.
- `Postal Code is required` validation should be displayed.

## Actual Result

The application proceeds to the checkout overview page without requiring a postal code.

## Impact

Orders may proceed with incomplete customer information.

This could cause fulfillment or delivery-related problems in a production e-commerce environment.

---

# BUG-004 — Logged-Out User Can Access Shopping Cart Using Direct URL

**Module:** Authorization / Session  
**Severity:** Critical  
**Priority:** High  
**Status:** Open  
**Type:** Authorization  
**Reproducibility:** Always  

## Environment

- Application: SauceDemo Web Application
- Platform: Web
- Browser: Chromium
- Operating System: Windows 11

## Preconditions

- User was previously authenticated.
- User has successfully logged out.

## Steps to Reproduce

1. Log in using valid credentials.
2. Log out.
3. Manually navigate to:

   `/cart.html`

## Expected Result

- Access to the cart page should be denied.
- User should be redirected to the login page.
- An authentication-required error should be displayed.

## Actual Result

The shopping cart page is accessible without an authenticated session.

## Impact

Protected application functionality becomes accessible to unauthenticated users.

This represents an authorization and session-management risk.

---

# BUG-005 — Reset App State Does Not Clear Shopping Cart

**Module:** Application State  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Open  
**Type:** State Management  
**Reproducibility:** Always  

## Environment

- Application: SauceDemo Web Application
- Platform: Web
- Browser: Chromium
- Operating System: Windows 11

## Preconditions

- User is logged in.
- Shopping cart contains multiple products.
- Cart badge displays the correct item count.

## Steps to Reproduce

1. Add Sauce Labs Backpack to the cart.
2. Add Sauce Labs Bike Light to the cart.
3. Confirm the cart badge displays `2`.
4. Open the application menu.
5. Select Reset App State.
6. Observe the cart badge and cart contents.

## Expected Result

- Shopping cart state is cleared.
- Shopping cart badge disappears.
- Previously added products are no longer stored in the cart.

## Actual Result

One or more previously selected products remain in the shopping cart after Reset App State is used.

## Impact

Application state becomes inconsistent with the user's reset action.

This may also affect subsequent testing because the environment is not returned to a clean state.

---

## Severity Reference

### Critical

A defect affecting security, authorization, critical workflows, or making a major application function unusable.

### High

A significant functional defect affecting an important user workflow with no reasonable workaround.

### Medium

A functional defect with limited impact or an available workaround.

### Low

A minor usability, visual, or cosmetic issue.

---

## Notes

These defect reports are **simulated examples created for QA portfolio practice**.

They demonstrate how defects would be documented if the described behavior were observed during testing.

They should not be interpreted as verified defects in the currently deployed SauceDemo application.