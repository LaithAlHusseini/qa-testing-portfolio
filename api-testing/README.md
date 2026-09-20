# API Testing

REST API testing project built with Postman and Newman as part of the QA Testing Portfolio.

## API Under Test

[JSONPlaceholder](https://jsonplaceholder.typicode.com/)

JSONPlaceholder is a fake REST API designed for testing and prototyping.

## Test Coverage

The Postman collection currently covers:

- GET all posts
- GET a single post
- POST / Create a post
- PUT / Update a post
- DELETE / Delete a post

## Automated Validations

The collection contains automated assertions for:

- HTTP status codes
- Response data types
- Required JSON properties
- Resource IDs
- Non-empty response values
- Create response validation
- Update response validation
- DELETE response structure

A complete collection run currently executes:

- 5 API requests
- 5 test scripts
- 20 automated assertions

## Postman Collection

The exported Postman collection is available in:

[`postman/`](./postman/)

## Newman CLI

The Postman collection can also be executed from the command line using Newman.

Install dependencies:

```bash
npm ci