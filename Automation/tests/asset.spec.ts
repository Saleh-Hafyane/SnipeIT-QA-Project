import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AssetPage } from '../pages/AssetPage';

test('TC-03: Create a new Hardware Asset successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const assetPage = new AssetPage(page);
    // login
    await loginPage.goto();
    await loginPage.login('admin', 'password');
    await expect(page.locator('h1')).toContainText('Dashboard');
    // create asset
    await assetPage.gotoPage();
    await assetPage.createAsset('xps 13', 'Ready to Deploy');
    await assetPage.expectSuccess();
});