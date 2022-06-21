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

    get isCloseBtnPopUpExist(){
        return $$("#onetrust-consent-sdk #onetrust-close-btn-container button")    
    }

    async closeCookieSection(){
        try{
            const btn = await this.closeBtnPopUp
            await btn.waitForDisplayed({timeout: 5000})
            await btn.click()
        }catch(error){
        }
        // const btn2 = await this.closeBtnPopUp
        // console.log(btn2.isExisting())
    }

    async open() {
        await browser.url("https://www.cypress.io/")
    }
    
}

module.exports = new CypressHome();