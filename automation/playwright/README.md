# Playwright Test Automation

Automated end-to-end testing project built with Playwright and TypeScript as part of my QA Testing Portfolio.

## Application Under Test

[SauceDemo](https://www.saucedemo.com/)

SauceDemo is used as a practice application for demonstrating UI test automation techniques.

## Current Test Coverage

### Checkout

- Complete checkout successfully with valid customer information
- Verify checkout overview and selected product
- Verify successful order confirmation
- Validate required postal code
- Prevent checkout when required information is missing

### Inventory & Shopping Cart

- Add a product to the shopping cart
- Validate the shopping cart badge
- Verify the selected product appears in the cart
- Remove a product from the shopping cart
- Verify the cart badge disappears after removing the product

### Authentication

- Successful login with valid credentials
- Login with invalid password
- Login with empty username
- Login with empty password
- Locked-out user validation

## Browsers

Tests are executed across:

- Chromium
- Firefox
- WebKit

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions

## Run Tests Locally

Install dependencies:

`npm ci`

Install Playwright browsers:

`npx playwright install`

Run all tests:

`npx playwright test`

Run tests with visible browsers:

`npx playwright test --headed`

Open the HTML report:

`npx playwright show-report`

## Continuous Integration

The automated test suite runs through GitHub Actions on:

- Pushes to `main`
- Pull requests targeting `main`

