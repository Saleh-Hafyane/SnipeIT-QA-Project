import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('TC-01: login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('admin', 'password');

  // Proof we are inside: dashboard visible
  await expect(page.locator('h1')).toContainText('Dashboard');
});

test('TC-02: login with wrong password shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('admin', 'wrongpassword');

  await loginPage.expectErrorVisible();
});