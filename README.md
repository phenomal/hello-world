# hello-world

Welcome to my playwright demo site.

1. anthony_USPS_Demo.spec.ts
   
Test Structure Explanation
Setup:

The test sets the browser viewport size and timeout, then creates page object instances for USPSpage and BasePage.

Navigation:
It navigates to the USPS production site using a helper method.

Initial Assertion:
It verifies the homepage loaded by checking for the text "Search or Track Packages".

ZIP Code Lookup Flows:
The test covers three main lookup scenarios:

By Address:
Navigates to the ZIP Code lookup.
Selects "Find by Address".
Fills in address fields and submits.
Asserts the result contains the entered address.

By City and State:
Switches to the "ZIP Code™ by City and State" tab.
Fills in city and state, submits, and asserts the result.

By ZIP Code:
Switches to "Cities by ZIP Code™".
Enters a ZIP code, submits, and asserts the result contains expected city names and ZIP.

Menu Navigation Checks:
The test then clicks through the main navigation menu items ("Send", "Receive", "Shop", "Business", "International", "Help"), asserting that each page loads the expected header or content.

Assertions:
After each action, the test uses assertions to verify that the correct content is displayed, ensuring the UI responds as expected.

Page Object Model:
The test uses the Page Object Model (POM) pattern, encapsulating page interactions in the USPSpage and BasePage classes for maintainability and readability.


2. web_content_autoCreatedby _CoPilot.spec.ts

This test was written and created entirely by CoPilot using MCP. I provided a prompt and it did the rest. The video of this is on my site under https://adavisprofessional.netlify.app/projects, playwright MCP Demo.

Test Structure Explanation

Imports and Locators:
The test imports Playwright’s test and expect functions, as well as locator objects for each page (Home, Resume, Projects). These locator objects contain CSS selectors for key elements on each page.

Test Cases:
The file contains four main test cases, each focused on a specific aspect of the website:

Home page navigation links:

Navigates to the Home page.
Asserts that all main navigation links (Home, Resume, Projects, GitHub) are visible.
Home page content:

Navigates to the Home page.
Asserts that the main heading and subtitle are present and contain the expected text.
Resume page skills section:

Navigates to the Resume page.
Asserts that the Skills section heading is visible and that the skills list contains specific items.
Projects page sections:

Navigates to the Projects page.
Asserts that the main heading and key project section headings are visible.
Assertions:
Each test uses Playwright’s expect API to verify that elements are visible and contain the correct text, ensuring the UI is rendered as expected.

Page Coverage:
The tests cover navigation and content verification for all main pages of the site, providing a basic smoke test for the site’s structure and content.

3.  projectsiteMCPTest_copied_pasted_from_copilot.spec.ts

This test was created by CoPilot using MCP. I then copied and pasted the output into the files provided to created the test.
