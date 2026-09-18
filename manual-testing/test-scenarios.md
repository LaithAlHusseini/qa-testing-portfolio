# Test Scenarios

## Application Under Test

Sample E-Commerce Web Application

## Scope

This document contains high-level test scenarios covering the main user flows of an e-commerce web application.

---

## Authentication

### TS-001 — User Login
Verify that a registered user can log in using valid credentials.

### TS-002 — Invalid Login
Verify that the system prevents login when invalid credentials are entered.

### TS-003 — Empty Login Fields
Verify validation when the email or password field is left empty.

### TS-004 — Invalid Email Format
Verify that the system detects an incorrectly formatted email address.

### TS-005 — User Logout
Verify that a logged-in user can successfully log out.

---

## Registration

### TS-006 — Valid User Registration
Verify that a new user can create an account using valid information.

### TS-007 — Existing Email Registration
Verify that registration is rejected when the email address is already registered.

### TS-008 — Password Validation
Verify password requirements such as minimum length and required characters.

### TS-009 — Required Fields
Verify validation when mandatory registration fields are empty.

---

## Product Search

### TS-010 — Search Existing Product
Verify that searching for an existing product returns relevant results.

### TS-011 — Search Non-Existing Product
Verify system behavior when no products match the search query.

### TS-012 — Search Using Partial Product Name
Verify that relevant products are returned when part of a product name is entered.

---

## Shopping Cart

### TS-013 — Add Product to Cart
Verify that a user can add an available product to the shopping cart.

### TS-014 — Update Product Quantity
Verify that product quantity can be increased or decreased.

### TS-015 — Remove Product from Cart
Verify that a product can be removed from the shopping cart.

### TS-016 — Cart Total Calculation
Verify that subtotal and total amounts are calculated correctly.

---

## Checkout

### TS-017 — Successful Checkout
Verify that a user can complete checkout using valid information.

### TS-018 — Missing Required Checkout Information
Verify validation when required checkout information is missing.

### TS-019 — Invalid Payment Information
Verify system behavior when invalid payment information is provided.

### TS-020 — Order Confirmation
Verify that an order confirmation is displayed after successful checkout.
