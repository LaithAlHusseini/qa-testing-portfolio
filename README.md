# QA Testing Portfolio

[![Playwright Tests](https://github.com/LaithAlHusseini/qa-testing-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/LaithAlHusseini/qa-testing-portfolio/actions/workflows/playwright.yml)

[![API Tests](https://github.com/LaithAlHusseini/qa-testing-portfolio/actions/workflows/api-tests.yml/badge.svg)](https://github.com/LaithAlHusseini/qa-testing-portfolio/actions/workflows/api-tests.yml)

A practical Software Quality Assurance portfolio demonstrating manual testing, test planning, test design, defect reporting, API testing, and end-to-end test automation.

## Portfolio Highlights

- SauceDemo test plan covering scope, strategy, risks, entry criteria, and exit criteria
- 33 documented functional test scenarios
- 33 detailed manual test cases
- Requirements Traceability Matrix linking requirements, manual tests, and automation coverage
- Structured defect reports with severity, priority, reproduction steps, expected results, and actual results
- REST API testing using Postman
- Automated API response validations
- End-to-end UI automation using Playwright and TypeScript
- 27 automated end-to-end test scenarios
- 81 cross-browser Playwright test executions per full regression run
- Cross-browser testing on Chromium, Firefox, and WebKit
- Page Object Model architecture with reusable custom fixtures
- Authentication, authorization, session, inventory, cart, product, and checkout coverage
- TypeScript static type checking
- Continuous Integration using GitHub Actions
- Automated Playwright HTML report generation
- Automated Postman collection execution using Newman
- API regression testing integrated with GitHub Actions CI
- Screenshots, videos, and traces retained for failed automated tests

## Repository Structure

- [`manual-testing/test-plan.md`](./manual-testing/test-plan.md) — SauceDemo test strategy, scope, approach, risks, and test completion criteria
- [`manual-testing/test-scenarios.md`](./manual-testing/test-scenarios.md) — 33 high-level functional test scenarios
- [`manual-testing/test-cases.md`](./manual-testing/test-cases.md) — 33 detailed functional test cases
- [`manual-testing/traceability-matrix.md`](./manual-testing/traceability-matrix.md) — Requirements traceability across manual and automated coverage
- [`bug-reports/bug-reports.md`](./bug-reports/bug-reports.md) — Structured SauceDemo defect report examples
- [`api-testing/`](./api-testing/) — REST API testing documentation and Postman collection
- [`automation/playwright/`](./automation/playwright/) — Playwright and TypeScript UI automation framework
- [`.github/workflows/`](./.github/workflows/) — GitHub Actions CI configuration

## Automation Project

The Playwright automation suite currently includes:

- 27 automated end-to-end test scenarios
- 81 cross-browser executions per full regression run
- Chromium, Firefox, and WebKit coverage
- Page Object Model architecture
- Custom Playwright fixtures
- Reusable test data
- Authentication and authorization testing
- Session behavior testing
- Inventory and product testing
- Shopping cart testing
- Checkout workflow testing
- Negative validation scenarios
- Application state testing
- Automated CI execution
- Playwright HTML reporting
- Failure screenshots
- Failure video recording
- Playwright traces

See the full automation documentation:

[`automation/playwright/README.md`](./automation/playwright/README.md)

## Areas Covered

### Test Planning & Manual Testing

- Requirements analysis
- Test planning
- Scope definition
- Entry and exit criteria
- Test scenario design
- Detailed test case design
- Positive testing
- Negative testing
- Functional testing
- Validation testing
- Authorization testing
- Session testing
- State management testing
- Cross-browser testing
- Boundary Value Analysis
- Equivalence Partitioning

### Requirements Traceability

The portfolio includes a Requirements Traceability Matrix connecting:

- Functional requirements
- Test scenarios
- Detailed test cases
- Automated Playwright coverage
- Automation status

See:

[`manual-testing/traceability-matrix.md`](./manual-testing/traceability-matrix.md)

### Defect Reporting

Structured defect reports demonstrate:

- Unique defect identification
- Module classification
- Severity
- Priority
- Environment
- Preconditions
- Reproduction steps
- Expected results
- Actual results
- Impact analysis

See:

[`bug-reports/bug-reports.md`](./bug-reports/bug-reports.md)

### API Testing

- REST API testing using Postman
- JSONPlaceholder API coverage
- GET, POST, PUT, and DELETE requests
- HTTP status code validation
- Response data type validation
- Required JSON property validation
- Automated Postman assertions
- Newman command-line execution
- Automated API regression testing through GitHub Actions
- 5 API requests and 20 automated assertions per collection run

See:

[`api-testing/README.md`](./api-testing/README.md)

### Test Automation

- Playwright
- TypeScript
- Page Object Model
- Custom fixtures
- Reusable test data
- Cross-browser testing
- End-to-end workflow testing
- Authentication and authorization testing
- Session validation
- Application state testing
- GitHub Actions CI
- Automated HTML reports
- Failure screenshots, videos, and traces

## Tools & Technologies

- Playwright
- TypeScript
- Node.js
- Postman
- Git
- GitHub
- GitHub Actions

## Continuous Integration

The Playwright automation suite runs automatically through GitHub Actions on:

- Pushes to `main`
- Pull requests targeting `main`

The CI pipeline performs:

1. Repository checkout
2. Node.js environment setup
3. Dependency installation
4. TypeScript static type checking
5. Playwright browser installation
6. Full automated regression execution
7. Playwright HTML report generation
8. HTML report artifact upload
9. Failure artifact upload when tests fail

Failure diagnostics can include:

- Screenshots
- Videos
- Playwright traces

## Test Execution Summary

### Manual QA Documentation

- 1 complete SauceDemo test plan
- 33 functional test scenarios
- 33 detailed test cases
- 33 mapped functional requirements
- Requirements Traceability Matrix
- Structured defect report examples

### Automated UI Testing

- 27 Playwright end-to-end scenarios
- 81 browser-specific executions per full run
- Chromium
- Firefox
- WebKit

### API Testing

- REST API coverage using JSONPlaceholder
- Postman collection
- Automated response validations
- GET, POST, PUT, and DELETE coverage

## Objectives

This repository demonstrates hands-on Software Quality Assurance practice rather than testing theory alone.

The goal is to demonstrate practical experience with:

- Test planning
- Requirements analysis
- Test design
- Manual functional testing
- Defect documentation
- Requirements traceability
- API validation
- UI automation
- Cross-browser testing
- Maintainable automation architecture
- Test reliability
- Failure diagnostics
- Continuous Integration

## Certification

ISTQB® Certified Tester Foundation Level (CTFL)

## Author

**Laith Al-Husseini**

Software Engineering Graduate  
ISTQB® CTFL Certified