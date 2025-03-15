import { Page, expect } from '@playwright/test';


//App Links

export const appLinks = {

    prodUSPS: 'https://www.usps.com/',
}



//Shared Methods

export class BasePage {
    protected page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async goToUSPSProd(): Promise<void> {
        await this.navigateTo(appLinks.prodUSPS);
        await this.page.waitForTimeout(2000);
    }

    async clickElement(selector: string): Promise<void> {
        const element = this.page.locator(selector);
        await element.waitFor({
            state: "visible",
            timeout: 15000
        });
        await element.click();
    }

    async fillData(selector: string, data: string): Promise<void> {
        const element = this.page.locator(selector);
        await element.waitFor({
            state: "visible",
            timeout: 15000
        });
        await element.click();
        await element.fill(data);
    }

    async assertHeader1(header: string) {
        await expect(this.page.locator('h1').first()).toHaveText(header, { timeout: 15000 })
    }

    async assertHeader2(header: string) {
        await expect(this.page.locator('h2')).toHaveText(header, { timeout: 15000 })
    }

    async selectDropdown(selector: string, data: string): Promise<void> {
        const element = this.page.locator(selector).first();
        await element.waitFor({
            state: "visible",
            timeout: 15000
        });
        await this.page.selectOption(selector, data)

    }

   
    

}





