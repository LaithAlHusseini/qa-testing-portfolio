# Playwright Test Automation

Automated end-to-end UI testing project built with Playwright and TypeScript as part of my QA Testing Portfolio.

## Application Under Test

[SauceDemo](https://www.saucedemo.com/)

SauceDemo is used as a practice application for demonstrating UI test automation, cross-browser testing, session handling, authorization checks, shopping cart behavior, and checkout workflows.

## Current Test Coverage

### Authentication

- Successful login with valid credentials
- Login with invalid password
- Login with empty username
- Login with empty password
- Locked-out user validation

### Authorization & Session

- Successful logout
- Verify authenticated session persistence after page refresh
- Prevent logged-out users from directly accessing the inventory page
- Prevent logged-out users from directly accessing the shopping cart
- Prevent logged-out users from directly accessing the checkout page

### Inventory & Products

- Add a product to the shopping cart
- Remove a product from the inventory page
- Add multiple products to the shopping cart
- Validate shopping cart item count
- Verify cart state persists after page refresh
- Sort products by name A to Z
- Sort products by name Z to A
- Sort products by price low to high
- Sort products by price high to low
- Open product details
- Verify product information
- Return from product details to the inventory page
- Reset application state

### Shopping Cart

- Verify selected products appear in the shopping cart
- Verify multiple products appear in the shopping cart
- Remove a product directly from the shopping cart
- Verify remaining cart contents after removing a product
- Continue shopping from the cart
- Verify cart state remains preserved while navigating

### Checkout

- Complete checkout successfully with valid customer information
- Verify checkout overview
- Verify the selected product during checkout
- Verify successful order confirmation
- Validate required first name
- Validate required last name
- Validate required postal code
- Prevent checkout when required customer information is missing

## Test Execution

The current automation suite contains:

- 27 automated end-to-end test scenarios
- 81 cross-browser Playwright test executions per full run
- Automated execution across Chromium, Firefox, and WebKit

Each test scenario is executed against all three configured browser engines.

## Browsers

Tests are executed across:

- Chromium
- Firefox
- WebKit

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- Custom Playwright Fixtures
- Git
- GitHub
- GitHub Actions

## Test Architecture

The automation project follows the Page Object Model pattern to separate test logic from page interactions and improve maintainability.

Reusable Playwright fixtures are used to centralize common setup such as authentication and checkout preparation.

### Page Objects

- `LoginPage.ts` — Login interactions, authentication validation, and login page assertions
- `InventoryPage.ts` — Inventory interactions, sorting, cart operations, product navigation, session actions, and application state management
- `CartPage.ts` — Shopping cart validation, item removal, checkout navigation, and continue-shopping behavior
- `ProductPage.ts` — Product detail validation and navigation
- `CheckoutPage.ts` — Checkout form interactions, validation, overview checks, and order completion

### Fixtures

Custom fixtures are used to provide reusable test states including:

- Authenticated user session
- Page Object instances
- Checkout-ready application state

This reduces duplicated setup code and keeps individual test scenarios focused on behavior and validation.

### Test Data

Reusable test data is separated from test logic for:

- User credentials
- Checkout customer information

This makes the suite easier to maintain and extend.

## Reliability & Cross-Browser Handling

The project includes several measures to improve test stability:

- Stable `data-test` selectors where available
- Explicit URL and element-state assertions
- Cross-browser execution
- TypeScript static type checking
- Controlled worker execution
- CI retries for failed tests
- Playwright traces on the first retry
- Validation of application state after navigation and page refresh
- Handling of browser-specific UI behavior where necessary

## Run Tests Locally

Install dependencies:

```bash
npm ci