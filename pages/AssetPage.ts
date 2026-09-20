import { Page, Locator, expect } from '@playwright/test';

export class AssetPage {
  readonly page: Page;

  // Locators
  readonly assetViewAllLink: Locator;
  readonly createAssetLink: Locator;
  readonly modelDropdown: Locator;
  readonly statusDropdown: Locator;
  readonly saveButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    
    
    this.assetViewAllLink = page.getByRole('link', { name: 'Assets view all' });
    this.createAssetLink = page.getByRole('button', { name: '+' });
    this.modelDropdown = page.locator('#select2-model_select_id-container');
    this.statusDropdown = page.locator('#select2-status_select_id-container');
    this.saveButton = page.getByRole('button', { name: 'Save' }).first();
    this.successMessage = page.getByText('Success:');
  }

  // Action: Go straight to the create page by Url
  async gotoUrl() {
    await this.page.goto('https://demo.snipeitapp.com/hardware/create',{ waitUntil: 'domcontentloaded' });
  }
   // Action: Go to the create page by clicking the link
  async gotoPage() {
    await this.assetViewAllLink.click();
  }
  // Action: Fill the form and save
  async createAsset(modelName: string, statusName: string) {
    await this.createAssetLink.click();
    await this.modelDropdown.click();
    await this.page.locator('.select2-search__field').fill(modelName);
    await this.page.getByRole('option', { name: new RegExp(modelName, 'i') }).click();
    await this.statusDropdown.click();
    await this.page.locator('.select2-search__field').fill(statusName);
    await this.page.getByRole('option', { name: new RegExp(statusName, 'i') }).click();
    await this.saveButton.click();
  }
 

  // Check
  async expectSuccess() {
    await expect(this.successMessage).toBeVisible();
  }
}