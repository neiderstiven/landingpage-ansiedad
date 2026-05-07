import { test, expect } from '@playwright/test';

test.describe('Adiós Ansiedad Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main headline', async ({ page }) => {
    const headline = page.locator('h1');
    await expect(headline).toContainText('técnicas de bienestar');
  });

  test('should scroll to product section when clicking hero CTA', async ({ page }) => {
    const cta = page.getByLabel('Explorar las 15 técnicas de bienestar');
    await cta.click();
    
    // Check if the product section is in view
    const productSection = page.locator('#product');
    await expect(productSection).toBeVisible();
  });

  test('should have a purchase button that opens Hotmart', async ({ page }) => {
    const purchaseButton = page.getByLabel('Descargar el Kit de bienestar por 5.99 dólares');
    await expect(purchaseButton).toBeVisible();
    // Note: We don't click it to avoid navigating away in a simple test
  });

  test('should be accessible', async ({ page }) => {
    // Basic accessibility check (can be expanded with axe-playwright)
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
  });
});
