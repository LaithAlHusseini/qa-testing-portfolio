# QA Testing Portfolio

[![Playwright Tests](https://github.com/LaithAlHusseini/qa-testing-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/LaithAlHusseini/qa-testing-portfolio/actions/workflows/playwright.yml)

A practical Software Quality Assurance portfolio demonstrating manual testing, test design, defect reporting, API testing, and end-to-end test automation.

## Portfolio Highlights

- Manual test scenarios and detailed test cases
- Structured defect reports with severity and priority
- REST API testing using Postman
- Automated API response validations
- End-to-end UI automation using Playwright and TypeScript
- 27 automated end-to-end test scenarios
- 81 cross-browser Playwright test executions per full run
- Cross-browser testing on Chromium, Firefox, and WebKit
- Page Object Model architecture with reusable custom fixtures
- Authentication, authorization, session, inventory, cart, product, and checkout coverage
- TypeScript static type checking
- Continuous Integration using GitHub Actions
- Automated Playwright HTML report generation

## Repository Structure

- [`manual-testing/`](./manual-testing/) — Test scenarios, test cases, and exploratory testing documentation
- [`bug-reports/`](./bug-reports/) — Structured software defect reports
- [`api-testing/`](./api-testing/) — REST API testing documentation and Postman collection
- [`automation/playwright/`](./automation/playwright/) — Playwright and TypeScript UI automation framework
- [`.github/workflows/`](./.github/workflows/) — GitHub Actions CI configuration

## Automation Project

The Playwright automation suite currently includes:

- 27 automated test scenarios
- 81 cross-browser executions per full run
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

See the full automation documentation:

[`automation/playwright/README.md`](./automation/playwright/README.md)

## Areas Covered

### Manual Testing

- Requirements analysis
- Test scenario design
- Test case design
- Positive testing
- Negative testing
- Boundary Value Analysis
- Equivalence Partitioning
- Exploratory testing

### Defect Reporting

Structured defect reports containing:

- Reproduction steps
- Expected results
- Actual results
- Severity
- Priority

### API Testing

- REST API testing
- Postman collections
- Request and response validation
- Status code validation
- Automated API assertions

### Test Automation

- Playwright
- TypeScript
- Page Object Model
- Custom fixtures
- Cross-browser testing
- End-to-end workflow testing
- GitHub Actions CI
- Automated HTML reports

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

The CI pipeline performs dependency installation, TypeScript type checking, Playwright browser installation, automated test execution, and HTML report upload.

## Objectives

This repository demonstrates hands-on Software Quality Assurance practice rather than testing theory alone.

The goal is to show practical experience with:

- Test design
- Defect documentation
- API validation
- UI automation
- Cross-browser testing
- Maintainable automation architecture
- Continuous Integration

## Certification

ISTQB® Certified Tester Foundation Level (CTFL)

## Author

**Laith Al-Husseini**

Software Engineering Graduate  
ISTQB® CTFL Certified