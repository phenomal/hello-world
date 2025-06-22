import { test, expect } from '@playwright/test';
import { homePageLocators } from './usps_demo/locators/homePageLocators_autoCreatedby _CoPilot';
import { resumePageLocators } from './usps_demo/locators/resumePageLocators_autoCreatedby _CoPilot';
import { projectsPageLocators } from './usps_demo/locators/projectsPageLocators_autoCreatedby _CoPilot';

test('Home page navigation links', async ({ page }) => {
  await page.goto('https://adavisprofessional.netlify.app/home');
  await expect(page.locator(homePageLocators.navHome)).toBeVisible();
  await expect(page.locator(homePageLocators.navResume)).toBeVisible();
  await expect(page.locator(homePageLocators.navProjects)).toBeVisible();
  await expect(page.locator(homePageLocators.navGitHub)).toBeVisible();
});

test('Home page content', async ({ page }) => {
  await page.goto('https://adavisprofessional.netlify.app/home');
  await expect(page.locator(homePageLocators.mainHeading)).toHaveText('Anthony Davis');
  await expect(page.locator(homePageLocators.subtitle)).toContainText('Director of Quality Assurance');
});

test('Resume page skills section', async ({ page }) => {
  await page.goto('https://adavisprofessional.netlify.app/resume');
  await expect(page.locator(resumePageLocators.skillsHeading)).toBeVisible();
  await expect(page.locator(resumePageLocators.skillsList)).toContainText(['Software Quality Assurance', 'Test Automation']);
});

test('Projects page sections', async ({ page }) => {
  await page.goto('https://adavisprofessional.netlify.app/projects');
  await expect(page.locator(projectsPageLocators.mainHeading)).toBeVisible();
  await expect(page.locator(projectsPageLocators.websiteSection)).toBeVisible();
  await expect(page.locator(projectsPageLocators.uspsSection)).toBeVisible();
});
