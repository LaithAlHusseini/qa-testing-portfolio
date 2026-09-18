# Bug Reports

## Application Under Test

Sample E-Commerce Web Application

## Purpose

This document contains sample defect reports created for QA portfolio practice.

The defects are simulated to demonstrate structured bug reporting, including severity, priority, environment, reproduction steps, expected behavior, and actual behavior.

---

# BUG-001 — Cart Total Is Not Updated After Removing a Product

**Module:** Shopping Cart  
**Severity:** High  
**Priority:** High  
**Status:** Open  

## Environment

- Platform: Web
- Browser: Google Chrome
- Operating System: Windows 11

## Preconditions

- User has at least two products in the shopping cart.

## Steps to Reproduce

1. Open the shopping cart.
2. Verify that two products are displayed.
3. Note the current cart total.
4. Remove one of the products.
5. Observe the cart total.

## Expected Result

The removed product should disappear from the cart and the total amount should be recalculated immediately.

## Actual Result

The product is removed successfully, but the cart total still includes the price of the removed product.

## Impact

The user may see an incorrect order total and could be charged an incorrect amount during checkout.

---

# BUG-002 — Registration Allows an Already Registered Email Address

**Module:** Registration  
**Severity:** High  
**Priority:** High  
**Status:** Open  

## Environment

- Platform: Web
- Browser: Google Chrome
- Operating System: Windows 11

## Preconditions

- An account already exists with `user@example.com`.

## Steps to Reproduce

1. Open the registration page.
2. Enter valid user information.
3. Enter `user@example.com` as the email address.
4. Enter a valid password.
5. Submit the registration form.

## Expected Result

The system should reject the registration and inform the user that the email address is already registered.

## Actual Result

The registration is completed successfully and another account is created using the same email address.

## Impact

Duplicate accounts may cause authentication, account management, and data integrity issues.

---

# BUG-003 — Checkout Continues When Required Shipping Field Is Empty

**Module:** Checkout  
**Severity:** Medium  
**Priority:** High  
**Status:** Open  

## Environment

- Platform: Web
- Browser: Google Chrome
- Operating System: Windows 11

## Preconditions

- User has at least one product in the shopping cart.
- User has reached the checkout page.

## Steps to Reproduce

1. Proceed to checkout.
2. Enter valid customer information.
3. Leave the postal code field empty.
4. Enter valid payment information.
5. Click the Confirm Order button.

## Expected Result

The system should prevent checkout and display a validation message for the required postal code field.

## Actual Result

The checkout process continues without requiring a postal code.

## Impact

The order may contain incomplete shipping information and could fail during delivery processing.

---

## Notes

These defect reports are simulated examples created for software testing practice and portfolio demonstration.
