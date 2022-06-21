class CypressHome {
    get logInBtn(){
        return $('a[href="https://dashboard.cypress.io/login"]')
    }

    get navToPricingBtn(){
        return $("header a[href='/pricing']")
    }

    get navToFeatureBtn() {
        return $("header a[href='/features']")
    }

    get pricingEnterpriseSolutionDiv() {
        return $(".container div[color='gray'] button")
    }

    get closeBtnPopUp(){
        return $("#onetrust-consent-sdk #onetrust-close-btn-container button")
    }

    async closeCookieSection(){
        const btn = await this.closeBtnPopUp
        await btn.waitForDisplayed({timeout: 50000})
        await btn.click()
    }

    async open() {
        await browser.url("https://www.cypress.io/")
    }
    
}

module.exports = new CypressHome();