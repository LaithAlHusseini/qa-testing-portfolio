# API Testing

This section demonstrates practical REST API testing using Postman.

## API Under Test

[JSONPlaceholder](https://jsonplaceholder.typicode.com/)

JSONPlaceholder is a fake REST API used for testing and prototyping.

## Test Coverage

The Postman collection currently covers:

- GET all posts
- GET a single post
- POST / Create a post
- PUT / Update a post
- DELETE / Delete a post

## Automated Validations

Postman test scripts validate:

- HTTP status codes
- Response data types
- Required JSON properties
- Resource IDs
- Non-empty response values
- Create response data
- Update response data
- DELETE response structure

## Postman Collection

The exported collection is available here:

[`postman/`](./postman/)

It can be imported directly into Postman and executed locally.

## Notes

JSONPlaceholder simulates POST, PUT, and DELETE operations.

These requests return realistic responses but do not permanently modify server data.