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
    
});


