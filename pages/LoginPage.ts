import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // Locators
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton   = page.getByRole('button', { name: 'Login' });
  }


  async goto() {
    await this.page.goto('https://demo.snipeitapp.com/login',{ waitUntil: 'domcontentloaded' });
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Checks
  async expectErrorVisible() {
    await expect(this.page.locator('.alert-danger')).toBeVisible();
  }
}