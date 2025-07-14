// @ts-check
import { test, expect } from '@playwright/test';


test('Fill Demo Form', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/form');

  // Wait for the page to load completely.
  await page.waitForLoadState('networkidle');

  // Check page title.
  const title = await page.title();
  expect(title).toBe('Formy');

  //Enter First Name
  await page.fill('#first-name', 'John');

  //Enter Last Name
  await page.fill('#last-name', 'Doe');

  //Enter Job Title
  await page.fill('#job-title', 'Software Engineer');

  //Select Education Level
  await page.check('#radio-button-2');

  //Select Experience Level
  await page.selectOption('#select-menu', '2');

  //Check the checkbox
  await page.check('#checkbox-1');
  
  //Select Date
  await page.fill('#datepicker', '01/01/2023');

  //Click Submit Button
  await page.getByText('Submit').click();

  // Wait for the form submission to complete.
  await page.waitForLoadState('networkidle');

  //Verify success message
  const successMessage = await page.textContent('.alert');
  expect(successMessage).toContain('The form was successfully submitted!');
});


