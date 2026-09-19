# SauceDemo Test Scenarios

## Application Under Test

[SauceDemo](https://www.saucedemo.com/)

## Purpose

This document defines high-level functional test scenarios for the SauceDemo web application.

The scenarios cover authentication, authorization, inventory, product details, shopping cart behavior, checkout, session handling, and application state.

---

## Authentication

### TS-001 — Successful Login
Verify that a user can log in using valid credentials.

### TS-002 — Invalid Password
Verify that login is rejected when an incorrect password is entered.

### TS-003 — Empty Username
Verify that the system displays validation when the username is empty.

### TS-004 — Empty Password
Verify that the system displays validation when the password is empty.

### TS-005 — Locked-Out User
Verify that a locked-out user cannot log in.

### TS-006 — Successful Logout
Verify that an authenticated user can log out successfully.

---

## Authorization & Session

### TS-007 — Direct Inventory Access After Logout
Verify that a logged-out user cannot access the inventory page directly.

### TS-008 — Direct Cart Access After Logout
Verify that a logged-out user cannot access the shopping cart directly.

### TS-009 — Direct Checkout Access After Logout
Verify that a logged-out user cannot access the checkout page directly.

### TS-010 — Session Persistence After Refresh
Verify that an authenticated user remains logged in after refreshing the inventory page.

---

## Inventory

### TS-011 — Add Product to Cart
Verify that a user can add a product from the inventory page to the shopping cart.

### TS-012 — Remove Product from Inventory
Verify that a user can remove a previously added product from the inventory page.

### TS-013 — Add Multiple Products
Verify that multiple products can be added to the shopping cart.

### TS-014 — Cart Badge
Verify that the shopping cart badge displays the correct number of items.

### TS-015 — Cart Persistence After Refresh
Verify that cart contents remain available after refreshing the page.

---

## Product Sorting

### TS-016 — Sort Products by Name A to Z
Verify that products can be sorted alphabetically from A to Z.

### TS-017 — Sort Products by Name Z to A
Verify that products can be sorted alphabetically from Z to A.

### TS-018 — Sort Products by Price Low to High
Verify that products can be sorted from the lowest price to the highest price.

### TS-019 — Sort Products by Price High to Low
Verify that products can be sorted from the highest price to the lowest price.

---

## Product Details

### TS-020 — Open Product Details
Verify that a user can open the details page for a selected product.

### TS-021 — Product Information
Verify that the product details page displays the correct product information.

### TS-022 — Return to Inventory
Verify that a user can return from the product details page to the inventory page.

---

## Shopping Cart

### TS-023 — Verify Product in Cart
Verify that a selected product appears correctly in the shopping cart.

### TS-024 — Remove Product from Cart
Verify that a product can be removed directly from the shopping cart.

### TS-025 — Remaining Cart Contents
Verify that other products remain in the cart after one product is removed.

### TS-026 — Continue Shopping
Verify that a user can return to the inventory page using Continue Shopping.

---

## Checkout

### TS-027 — Successful Checkout
Verify that a user can complete the checkout process using valid customer information.

### TS-028 — Missing First Name
Verify that checkout is blocked when the first name is missing.

### TS-029 — Missing Last Name
Verify that checkout is blocked when the last name is missing.

### TS-030 — Missing Postal Code
Verify that checkout is blocked when the postal code is missing.

### TS-031 — Checkout Overview
Verify that the checkout overview contains the selected product.

### TS-032 — Order Completion
Verify that a successful order confirmation is displayed after completing checkout.

---

## Application State

### TS-033 — Reset Application State
Verify that using Reset App State clears the current shopping cart state.