import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('successful login with valid credentials', async () => {
   await loginPage.login(
  users.standard.username,
  users.standard.password
);

    await loginPage.expectLoginSuccess();
  });

  test('login fails with invalid password', async () => {
    await loginPage.login(
  users.invalid.username,
  users.invalid.password
);

    await loginPage.expectError(
      'Username and password do not match'
    );
  });

  test('login fails when username is empty', async () => {
    await loginPage.login('', users.standard.password);

    await loginPage.expectError(
      'Username is required'
    );
  });

  test('login fails when password is empty', async () => {
    await loginPage.login(users.standard.username, '');

    await loginPage.expectError(
      'Password is required'
    );
  });

  test('locked out user cannot login', async () => {
    await loginPage.login(
  users.locked.username,
  users.locked.password
);
    await loginPage.expectError(
      'Sorry, this user has been locked out'
    );
  });
});