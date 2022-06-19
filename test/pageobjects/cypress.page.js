class CypressHome {
    get logInBtn(){
        return $('a[href="https://dashboard.cypress.io/login"]')
    }

    get pricingBtn(){
        return $("a[href='/pricing']")
    }
    
    get closeBtnPopUp(){
        return $("#onetrust-consent-sdk #onetrust-close-btn-container button")
    }

    async closeCookieSection(){
        await this.open()
        const btn = await this.closeBtnPopUp
        await btn.waitForDisplayed({timeout: 50000})
        await btn.click()
    }


    async open() {
        await browser.url("https://www.cypress.io/")
    }
    
}

module.exports = new CypressHome();