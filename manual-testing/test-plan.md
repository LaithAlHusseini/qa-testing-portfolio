# SauceDemo Test Plan

## 1. Introduction

This test plan defines the testing approach for the SauceDemo web application.

The objective is to validate the application's critical user journeys, including authentication, inventory management, product navigation, shopping cart behavior, checkout, session handling, and access control.

Application Under Test:

https://www.saucedemo.com/

## 2. Test Objectives

The main objectives are to:

- Verify critical user workflows function correctly
- Validate positive and negative authentication scenarios
- Verify shopping cart behavior and state persistence
- Validate product navigation and sorting
- Verify checkout field validation and order completion
- Validate logout and session behavior
- Verify unauthorized users cannot access protected pages directly
- Confirm consistent behavior across supported browsers

## 3. Scope

### In Scope

- Login
- Logout
- Locked-out user behavior
- Inventory page
- Product sorting
- Product details
- Add to cart
- Remove from cart
- Multiple cart items
- Cart persistence
- Continue shopping
- Checkout information validation
- Checkout overview
- Order completion
- Session persistence
- Direct URL authorization checks
- Reset application state
- Cross-browser testing

### Out of Scope

- User registration
- Password recovery
- Payment gateway processing
- Real order fulfillment
- Backend database validation
- Performance testing
- Security penetration testing
- Mobile native applications

## 4. Test Types

Testing includes:

- Functional Testing
- Positive Testing
- Negative Testing
- Validation Testing
- Navigation Testing
- Session Testing
- Authorization Testing
- State Management Testing
- Cross-Browser Testing
- Automated End-to-End Testing

## 5. Test Environment

### Application

SauceDemo Web Application

### Browsers

- Chromium
- Firefox
- WebKit

### Automation

- Playwright
- TypeScript
- Node.js

### CI

- GitHub Actions

## 6. Test Approach

Manual test scenarios and test cases are used to validate expected application behavior.

Critical and repeatable workflows are automated using Playwright.

The automation framework uses:

- Page Object Model
- Reusable custom fixtures
- Centralized test data
- Cross-browser execution
- Automated reporting
- Failure screenshots
- Failure video recording
- Playwright traces

## 7. Entry Criteria

Testing can begin when:

- SauceDemo is accessible
- Required test credentials are available
- Supported browsers are installed
- Test environment is operational

## 8. Exit Criteria

Testing is considered complete when:

- Critical test scenarios have been executed
- Automated regression tests pass
- No unresolved blocker defects remain
- Critical and high-severity issues are documented
- Test results are available for review

## 9. Test Data

Testing uses SauceDemo-provided test accounts, including:

- Standard user
- Locked-out user
- Invalid authentication data

Checkout testing uses controlled customer information stored separately from test logic.

## 10. Defect Management

Defects should include:

- Unique defect ID
- Title
- Module
- Severity
- Priority
- Environment
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Supporting evidence when applicable

Severity levels:

- Critical
- High
- Medium
- Low

Priority levels:

- High
- Medium
- Low

## 11. Automation Coverage

The Playwright suite currently contains:

- 27 automated end-to-end scenarios
- 81 cross-browser executions per full regression run

Tests run against:

- Chromium
- Firefox
- WebKit

## 12. CI and Reporting

GitHub Actions automatically executes the Playwright regression suite on:

- Pushes to `main`
- Pull requests targeting `main`

The pipeline includes:

- Dependency installation
- TypeScript type checking
- Browser installation
- Automated test execution
- HTML report generation
- Failure screenshots
- Failure videos
- Playwright traces

## 13. Risks

Potential testing risks include:

- External SauceDemo availability
- Browser-specific rendering differences
- UI animation timing differences
- Changes to SauceDemo selectors or application behavior
- Network instability during CI execution

## 14. Deliverables

Testing deliverables include:

- Test Plan
- Test Scenarios
- Test Cases
- Bug Reports
- Playwright Automation Suite
- Postman API Collection
- GitHub Actions CI Pipeline
- Playwright HTML Test Reports