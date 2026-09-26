class LoginPage {

    constructor(page) {
        this.page=page;
        this.userName = page.getByRole('textbox', { name: 'email@example.com' });
        this.password = page.locator("input#userPassword");
        this.loginButton = page.locator("input#login");
    }

   async goingTo(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(username, password) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}

module.exports = {LoginPage};