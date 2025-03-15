import { test, expect } from '@playwright/test';
import { BasePage} from './usps_demo/shared';
import { USPSpage } from './usps_demo/usps/pages';


test('USPS_ZIPCODE_Search', async ({ page }) => {
  test.setTimeout(80000);
  const usps = new USPSpage(page);
  const basePage = new BasePage(page);
  await basePage.goToUSPSProd();
  await expect(page.locator('body')).toContainText('Search or Track Packages');
  await usps.click_QuickToolsMenu();
  await page.locator('a').filter({ hasText: 'Look Up a ZIP Code™' }).first().click();

  //Search By Address
  await usps.click_findbyAddress();
  await usps.fill_ZipCodeByAddress('607 RONALD REAGAN DR','Evans','GA');
  await usps.clickLinkByRole('button', 'Find');
  //Assert Results
  await expect(page.locator('#zip-lookup-app')).toContainText('You entered: 607 RONALD REAGAN DR EVANS GA');

  //Search by City and State
  await usps.clickLinkByRole('link', 'ZIP Code™ by City and State');
  await usps.fill_ZipCodeByCityState('Evans','GA');
  await usps.clickLinkByRole('button', 'Find');
  //Assert Results
  await expect(page.locator('#zip-lookup-app')).toContainText('You entered: EVANS GA');

  //Search by ZipCode
  await usps.clickLinkByRole('link', 'Cities by ZIP Code™');
  await usps.fill_ZipCodeZip('30907');
  await usps.clickLinkByRole('button', 'Find');
  //Assert Results
  await expect(page.locator('#zip-lookup-app')).toContainText('AUGUSTA GA');
  await expect(page.locator('#zip-lookup-app')).toContainText('MARTINEZ GA');
  await expect(page.locator('#zip-lookup-app')).toContainText('30907');

  //Check Other Links and Page loads
  await usps.click_SendMenuLink();
  await basePage.assertHeader1('Send Mail & Packages');
  await usps.click_ReceiveMenuLink();
  await basePage.assertHeader1('Receive Mail & Packages');
  await usps.click_ShopMenuLink();
  await basePage.assertHeader1('The Postal Store®');
  await usps.click_BusinessMenuLink();
  await basePage.assertHeader1('Business');
  await usps.click_InternationalMenuLink();
  await basePage.assertHeader1('International Services ');
  await usps.click_HelpMenuLink();
  await expect(page.locator('body')).toContainText('How can we help?');
 
});

