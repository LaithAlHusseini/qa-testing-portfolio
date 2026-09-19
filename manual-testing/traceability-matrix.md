# SauceDemo Requirements Traceability Matrix

## Purpose

This document maps SauceDemo functional requirements to manual test scenarios, detailed test cases, and Playwright automated test coverage.

The matrix helps demonstrate traceability between requirements, manual QA documentation, and automated regression testing.

## Coverage Status

- **Automated** — Covered by a dedicated Playwright automated test.
- **Automated (Shared)** — Covered as an assertion or validation inside another automated workflow.
- **Manual** — Covered manually but not currently automated.

---

| Requirement ID | Requirement | Test Scenario | Test Case | Automation Coverage | Status |
|---|---|---|---|---|---|
| REQ-001 | User can log in with valid credentials | TS-001 | TC-001 | `successful login with valid credentials` | Automated |
| REQ-002 | Invalid password must prevent login | TS-002 | TC-002 | `login fails with invalid password` | Automated |
| REQ-003 | Username is required | TS-003 | TC-003 | `login fails when username is empty` | Automated |
| REQ-004 | Password is required | TS-004 | TC-004 | `login fails when password is empty` | Automated |
| REQ-005 | Locked-out users cannot log in | TS-005 | TC-005 | `locked out user cannot login` | Automated |
| REQ-006 | Authenticated user can log out | TS-006 | TC-006 | `user can log out successfully` | Automated |
| REQ-007 | Logged-out user cannot access inventory directly | TS-007 | TC-007 | `logged out user cannot access inventory directly` | Automated |
| REQ-008 | Logged-out user cannot access cart directly | TS-008 | TC-008 | `logged out user cannot access cart directly` | Automated |
| REQ-009 | Logged-out user cannot access checkout directly | TS-009 | TC-009 | `logged out user cannot access checkout directly` | Automated |
| REQ-010 | Authenticated session persists after refresh | TS-010 | TC-010 | `authenticated session persists after page refresh` | Automated |
| REQ-011 | User can add a product to the cart | TS-011 | TC-011 | `user can add a product to the cart` | Automated |
| REQ-012 | User can remove a product from inventory | TS-012 | TC-012 | `user can remove a product from the cart` | Automated |
| REQ-013 | User can add multiple products to the cart | TS-013 | TC-013 | `user can add multiple products to the cart` | Automated |
| REQ-014 | Cart badge reflects the current item count | TS-014 | TC-014 | Cart count assertions in add/remove/multiple-product tests | Automated (Shared) |
| REQ-015 | Cart state persists after refresh | TS-015 | TC-015 | `shopping cart persists after page refresh` | Automated |
| REQ-016 | Products can be sorted by name A to Z | TS-016 | TC-016 | `user can sort products by name A to Z` | Automated |
| REQ-017 | Products can be sorted by name Z to A | TS-017 | TC-017 | `user can sort products by name Z to A` | Automated |
| REQ-018 | Products can be sorted by price low to high | TS-018 | TC-018 | `user can sort products by price low to high` | Automated |
| REQ-019 | Products can be sorted by price high to low | TS-019 | TC-019 | `user can sort products by price high to low` | Automated |
| REQ-020 | User can open product details | TS-020 | TC-020 | `user can open product details` | Automated |
| REQ-021 | Product details display correct product information | TS-021 | TC-021 | Product information assertions inside `user can open product details` | Automated (Shared) |
| REQ-022 | User can return from product details to inventory | TS-022 | TC-022 | `user can return from product details to inventory` | Automated |
| REQ-023 | Added product appears in the shopping cart | TS-023 | TC-023 | Product visibility assertion inside `user can add a product to the cart` | Automated (Shared) |
| REQ-024 | User can remove a product directly from the cart | TS-024 | TC-024 | `user can remove a product from the cart page` | Automated |
| REQ-025 | Remaining cart products persist after removing one item | TS-025 | TC-025 | Remaining product and badge assertions inside cart removal test | Automated (Shared) |
| REQ-026 | User can continue shopping from the cart | TS-026 | TC-026 | `user can continue shopping from the cart` | Automated |
| REQ-027 | User can complete checkout with valid customer information | TS-027 | TC-027 | `user can complete checkout successfully` | Automated |
| REQ-028 | First name is required during checkout | TS-028 | TC-028 | `checkout fails when first name is missing` | Automated |
| REQ-029 | Last name is required during checkout | TS-029 | TC-029 | `checkout fails when last name is missing` | Automated |
| REQ-030 | Postal code is required during checkout | TS-030 | TC-030 | `checkout fails when postal code is missing` | Automated |
| REQ-031 | Checkout overview displays the selected product | TS-031 | TC-031 | Overview and product assertions inside successful checkout test | Automated (Shared) |
| REQ-032 | Completed checkout displays order confirmation | TS-032 | TC-032 | Completion assertions inside successful checkout test | Automated (Shared) |
| REQ-033 | Reset App State clears the current cart state | TS-033 | TC-033 | `user can reset application state` | Automated |

---

## Traceability Summary

### Manual Coverage

- 33 documented test scenarios
- 33 detailed test cases
- 33 mapped functional requirements

### Automation Coverage

The Playwright regression suite contains:

- 27 dedicated automated end-to-end scenarios
- 81 cross-browser test executions per full run
- Additional requirements validated through shared assertions inside broader automated workflows

### Browser Coverage

Automated regression tests execute against:

- Chromium
- Firefox
- WebKit

## Notes

Some requirements are intentionally validated as part of larger end-to-end workflows rather than duplicated as separate automated test cases.

For example:

- Cart badge validation is asserted during multiple cart workflows.
- Product information validation is included in the product details test.
- Checkout overview and order confirmation are validated inside the successful checkout flow.

This avoids unnecessary test duplication while preserving requirement coverage.