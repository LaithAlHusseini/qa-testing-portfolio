# Test Cases

## Application Under Test

Sample E-Commerce Web Application

## Purpose

This document contains detailed functional test cases derived from the high-level test scenarios documented in `test-scenarios.md`.

---

## TC-001 — Login with Valid Credentials

**Module:** Authentication  
**Priority:** High  

**Preconditions:**
- User is registered.
- User is on the login page.

**Test Data:**
- Email: `user@example.com`
- Password: `ValidPass123`

**Steps:**
1. Enter a valid registered email address.
2. Enter the correct password.
3. Click the Login button.

**Expected Result:**
- Login is successful.
- User is redirected to the authenticated area/dashboard.
- User session is created.

---

## TC-002 — Login with Invalid Password

**Module:** Authentication  
**Priority:** High  

**Preconditions:**
- User is registered.
- User is on the login page.

**Test Data:**
- Email: `user@example.com`
- Password: `WrongPass123`

**Steps:**
1. Enter a valid registered email address.
2. Enter an incorrect password.
3. Click the Login button.

**Expected Result:**
- Login is rejected.
- An appropriate error message is displayed.
- User remains unauthenticated.

---

## TC-003 — Login with Empty Email

**Module:** Authentication  
**Priority:** High  

**Preconditions:**
- User is on the login page.

**Test Data:**
- Email: Empty
- Password: `ValidPass123`

**Steps:**
1. Leave the email field empty.
2. Enter a password.
3. Click the Login button.

**Expected Result:**
- Login is not submitted successfully.
- Required-field validation is displayed for the email field.

---

## TC-004 — Login with Invalid Email Format

**Module:** Authentication  
**Priority:** Medium  

**Preconditions:**
- User is on the login page.

**Test Data:**
- Email: `user@`
- Password: `ValidPass123`

**Steps:**
1. Enter an incorrectly formatted email address.
2. Enter a password.
3. Click the Login button.

**Expected Result:**
- Invalid email format is detected.
- An appropriate validation message is displayed.

---

## TC-005 — Register with Valid Information

**Module:** Registration  
**Priority:** High  

**Preconditions:**
- User is not already registered.
- User is on the registration page.

**Test Data:**
- Name: `Test User`
- Email: `newuser@example.com`
- Password: `SecurePass123`

**Steps:**
1. Enter a valid name.
2. Enter a unique valid email address.
3. Enter a valid password.
4. Complete all required fields.
5. Submit the registration form.

**Expected Result:**
- Account is created successfully.
- User receives confirmation or is redirected appropriately.

---

## TC-006 — Register Using Existing Email

**Module:** Registration  
**Priority:** High  

**Preconditions:**
- An account already exists using the test email.

**Test Data:**
- Email: `user@example.com`

**Steps:**
1. Open the registration page.
2. Enter valid registration information.
3. Use an email that is already registered.
4. Submit the form.

**Expected Result:**
- Registration is rejected.
- User is informed that the email is already associated with an account.

---

## TC-007 — Search for Existing Product

**Module:** Product Search  
**Priority:** Medium  

**Preconditions:**
- Product exists in the catalog.

**Test Data:**
- Search term: `Laptop`

**Steps:**
1. Navigate to the product search field.
2. Enter the product name.
3. Submit the search.

**Expected Result:**
- Relevant products are displayed.
- Search results match the entered search term.

---

## TC-008 — Add Product to Shopping Cart

**Module:** Shopping Cart  
**Priority:** High  

**Preconditions:**
- Product is available.
- User is viewing the product.

**Steps:**
1. Select an available product.
2. Click Add to Cart.
3. Open the shopping cart.

**Expected Result:**
- Product is added to the cart.
- Correct product information is displayed.
- Cart quantity and total are updated correctly.

---

## TC-009 — Remove Product from Shopping Cart

**Module:** Shopping Cart  
**Priority:** Medium  

**Preconditions:**
- Shopping cart contains at least one product.

**Steps:**
1. Open the shopping cart.
2. Select the Remove option for the product.

**Expected Result:**
- Product is removed from the cart.
- Cart total is recalculated correctly.

---

## TC-010 — Complete Checkout with Valid Information

**Module:** Checkout  
**Priority:** Critical  

**Preconditions:**
- Shopping cart contains at least one product.
- Product is available for purchase.

**Test Data:**
- Valid customer information
- Valid shipping information
- Valid payment information

**Steps:**
1. Open the shopping cart.
2. Proceed to checkout.
3. Enter valid customer and shipping information.
4. Enter valid payment information.
5. Confirm the order.

**Expected Result:**
- Order is submitted successfully.
- An order confirmation is displayed.
- A unique order reference is generated.
