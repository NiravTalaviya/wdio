class UpworkLogIn {
    get inputUserName(){
        return $('#login_username')
    }
    async enterUserName(username){
        await this.inputUserName.setValue(username)
    }

    get loginUsingGoogle(){
        return $('#loging_google_submit')
    }
    
    async clickOnLogInUsingGoogle(){
        await this.loginUsingGoogle.click()
    }
}

module.exports = new UpworkLogIn();