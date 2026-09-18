import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('successful login with valid credentials', async () => {
    await loginPage.login('standard_user', 'secret_sauce');

    await loginPage.expectLoginSuccess();
  });

  test('login fails with invalid password', async () => {
    await loginPage.login('standard_user', 'wrong_password');

    await loginPage.expectError(
      'Username and password do not match'
    );
  });

  test('login fails when username is empty', async () => {
    await loginPage.login('', 'secret_sauce');

    await loginPage.expectError(
      'Username is required'
    );
  });

  test('login fails when password is empty', async () => {
    await loginPage.login('standard_user', '');

    await loginPage.expectError(
      'Password is required'
    );
  });

  test('locked out user cannot login', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');

    await loginPage.expectError(
      'Sorry, this user has been locked out'
    );
  });
});