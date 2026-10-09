class LoginPagePractise {
    constructor(page) {
        this.page = page;
        this.userName = page.getByRole('textbox', { name: 'Username:' });
        this.password = page.getByRole('textbox', { name: 'Password:' });
        this.termsCheckbox = page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' });
        this.loginButton = page.getByRole('button', { name: 'Sign In' });
    }

    async goingTo() {
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    }

    async validLogin(username, password) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.termsCheckbox.check();
        await Promise.all([
            this.page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop'),
            this.loginButton.click(),
        ]);
    }
}

module.exports = { LoginPagePractise };
