// @ts-check
import { test, expect } from '@playwright/test';


test('check for footer text', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect the footer to contain specific text.
  const footer = page.locator('footer');
  await expect(footer).toContainText('© Microsoft');
});


