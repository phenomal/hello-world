import { Page, expect } from '@playwright/test';
import { BasePage } from '../shared';

//Menu Navigation locators
export const menuLinks = {

    navquicktools: '#navquicktools',
    navSend: '#navmailship',
    navReceive: '#navtrackmanage',
    navpostalstore: '#navpostalstore',
    navbusiness: '#navbusiness',
    navinternational: '#navinternational',
    navhelp: '#navhelp',

}


//Send Menu locators
export const zipCodeLookUp = {
    lookupZipCode: '[src="https://www.usps.com/assets/images/home/find_zip.svg"]',
}

//Look Up Zip Code Locators

export const zipCodeLookupOptions = {
    byAddress: '[href="/zip-code-lookup.htm?byaddress"]',
    byCityandState: '[href="/zip-code-lookup.htm?bycitystate"]',
    citiesbyZip: '[href="/zip-code-lookup.htm?citybyzipcode"]',

}

//Zip Code by address locators
export const zipCodebyAddress = {
    tAddress: '#tAddress',
    tCity: '#tCity',
    tState: '#tState',

}

//ZipCode by City and State locators
export const zipCodebyCityState = {
    city: '#tCity-city-state',
    state: '#tState-city-state',
}

//Zipcode search locator
const zipCode = '#tZip';

const clickFindBtn = '[id*="zip"].btn-primary';

export class USPSpage extends BasePage {
    constructor(public page) {
        super(page);
        this.page = page;
    }

    navquicktools: string = '//*[text()="Quick Tools"]';
    async click_QuickToolsMenu() {
        const button = this.page.locator(this.navquicktools).first();
        await button.waitFor({
            state: "visible",
            timeout: 5000
        });
        await button.click();
    }

    navSend: string = '//*[text()="Send"]';
    async click_SendMenuLink() {
        const button = this.page.locator(this.navSend).first();
        await button.waitFor({
            state: "visible",
            timeout: 5000
        });
        await button.click();
    }

    navReceive: string = '//*[text()="Receive"]';
    async click_ReceiveMenuLink() {
        const button = this.page.locator(this.navReceive).first();
        await button.waitFor({
            state: "visible",
            timeout: 5000
        });
        await button.click();
    }

    navShop: string = '//*[text()="Shop"]';
    async click_ShopMenuLink() {
        const button = this.page.locator(this.navShop).first();
        await button.waitFor({
            state: "visible",
            timeout: 15000
        });
        await button.click();
    }

    navBusiness: string = '//*[text()="Business"]';
    async click_BusinessMenuLink() {
        const button = this.page.locator(this.navBusiness).first();
        await button.waitFor({
            state: "visible",
            timeout: 15000
        });
        await button.click();
    }

    navInternational: string = '//*[text()="International"]';
    async click_InternationalMenuLink() {
        const button = this.page.locator(this.navInternational).first();
        await button.waitFor({
            state: "visible",
            timeout: 15000
        });
        await button.click();
    }

    navHelp: string = '//*[text()="Help"]';
    async click_HelpMenuLink() {
        const button = this.page.locator(this.navHelp).first();
        await button.waitFor({
            state: "visible",
            timeout: 15000
        });
        await button.click();
    }

    navLookUpaZipCode: string = '//*[text()="Look Up a ZIP Code™"]';
    async click_zipCodeLookUp() {
        const button = this.page.locator(this.navLookUpaZipCode).first();
        await button.waitFor({
            state: "visible",
            timeout: 15000
        });
        await button.click();
    }


    byAddressBtn: string = '//*[text()="Find by Address"]';
    async click_findbyAddress() {
        const button = this.page.locator(this.byAddressBtn).first();
        await button.waitFor({
            state: "visible",
            timeout: 15000
        });
        await button.click();
    }


    findbyCityStateBtn: string = '//*[text()="Find by Address"]';
    async click_findbyCityState() {
        const button = this.page.locator(this.findbyCityStateBtn).first();
        await button.waitFor({
            state: "visible",
            timeout: 15000
        });
        await button.click();
    }

    citiesbyZipBtn: string = '//*[text()="Find by Address"]';
    async click_findbyCitiesZip() {
        const button = this.page.locator(this.citiesbyZipBtn).first();
        await button.waitFor({
            state: "visible",
            timeout: 15000
        });
        await button.click();
    }

    async clickFindBtn(){
        await this.clickElement(clickFindBtn);

    }

    async clickLinkByRole(role: 'link' | 'button' | 'textbox' | 'checkbox' | 'radio' | 'combobox', name: string): Promise<void> {
        await this.page.getByRole(role, { name }).click();
    }


    async fill_streetbyAddress(tAddress: string) {
        await this.fillData(zipCodebyAddress.tAddress, tAddress)
    }

    async fill_citybyAddress(tCity: string) {
        await this.fillData(zipCodebyAddress.tCity, tCity)
    }

    async fill_statebyAddress(tState: string) {
        await this.selectDropdown(zipCodebyAddress.tState, tState)
    }

    async fill_ZipCodeByAddress(tAddress: string, tCity: string, tState: string) {
        await this.fill_streetbyAddress(tAddress);
        await this.fill_citybyAddress(tCity);
        await this.fill_statebyAddress(tState);
    }

    async fill_citybyCityState(city: string) {
        await this.fillData(zipCodebyCityState.city, city)
    }

    async fill_statebyCityState(state: string) {
        await this.selectDropdown(zipCodebyCityState.state, state)
    }

    async fill_ZipCodeByCityState(city: string, state: string) {
        await this.fill_citybyCityState(city);
        await this.fill_statebyCityState(state);
    }

    async fill_ZipCodeZip(zip: string) {
        await this.fillData(zipCode, zip);

    }

}







