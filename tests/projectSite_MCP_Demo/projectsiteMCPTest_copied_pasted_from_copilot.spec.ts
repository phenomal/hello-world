import { test, expect } from '@playwright/test';
import { homeLocators, resumeLocators, projectsLocators } from './locators_copied_pasted_from_copilot';

test('Home page navigation links', async ({ page }) => {
  await page.goto('https://adavisprofessional.netlify.app/home');
  await expect(page.locator(homeLocators.navHome)).toBeVisible();
  await expect(page.locator(homeLocators.navResume)).toBeVisible();
  await expect(page.locator(homeLocators.navProjects)).toBeVisible();
  await expect(page.locator(homeLocators.navGitHub)).toBeVisible();
});

test('Resume page Skills section', async ({ page }) => {
  await page.goto('https://adavisprofessional.netlify.app/resume');
  await expect(page.locator(resumeLocators.skillsHeading)).toBeVisible();
  await expect(page.locator(resumeLocators.skillsList)).toBeVisible();
});

test('Projects page project sections', async ({ page }) => {
  await page.goto('https://adavisprofessional.netlify.app/projects');
  await expect(page.locator(projectsLocators.websiteSection)).toBeVisible();
  await expect(page.locator(projectsLocators.uspsSection)).toBeVisible();
});