const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const UpworkLogIn = require('../pageobjects/upworklogin');
const CypressHome = require('../pageobjects/cypress.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');

        // Click on Logout button
        await SecurePage.LogoutBtn.click();       
    });

    it('w3schools tests', async ()=> {
        await browser.url('https://www.upwork.com/ab/f/home')
        await UpworkLogIn.enterUserName("Dummy");
    })

    it('Click on login with gmail', async () => {
        await browser.url('https://www.upwork.com/ab/f/home')
        await UpworkLogIn.clickOnLogInUsingGoogle();
    })

    it("Cypress Home page close cookie section", async () => {
        await CypressHome.open()
        await CypressHome.closeCookieSection()
    })

    it("Cypress open features page", async ()=> {
        await CypressHome.open()
        await CypressHome.closeCookieSection()

        // Click on navigate to feature page
        await CypressHome.navToFeatureBtn.click()    
    })

    it("Cypress open pricing page and click on Contact us Enterprise and close it", async ()=> {
        await CypressHome.open()
        await CypressHome.closeCookieSection()
        
        // Click on navigate to pricing page
        await CypressHome.navToPricingBtn.click()

        await CypressHome.pricingEnterpriseSolutionDiv.scrollIntoView()
        // await CypressHome.closeCookieSection()
        await $('div[color="gray"] button').click()

        await $('#modal__close').click()
        await browser.pause(4000000)
        // await browser.debug()
    })

    it.only("Cypress open pricing page and click on Contact us Enterprise and fill the form", async ()=> {
        await CypressHome.open()
        await CypressHome.closeCookieSection()
        
        // Click on navigate to pricing page
        await CypressHome.navToPricingBtn.click()

        await CypressHome.pricingEnterpriseSolutionDiv.scrollIntoView()
        await CypressHome.closeCookieSection()
        await $('div[color="gray"] button').click()


        const form = $('#modal__body').$('form')

        await form.$('input[name="firstname"]').setValue('firstname')
        // await browser.pause(4000000)
        // await browser.debug()
    })
    
});


