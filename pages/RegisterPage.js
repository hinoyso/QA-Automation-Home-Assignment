class RegisterPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demowebshop.tricentis.com/register';
    this.genderMale = '#gender-male';
    this.genderFemale = '#gender-female';
    this.firstName = '#FirstName';
    this.lastName = '#LastName';
    this.emailInput = '#Email';
    this.passwordInput = '#Password';
    this.confirmPasswordInput = '#ConfirmPassword';
    this.registerButton = '#register-button';
    this.continueButton = 'input[value="Continue"]';
    this.headerEmail = 'div.header-links .account';
  }

  async goto() {
    await this.page.goto(this.url);
    await this.page.click('#register-button');
  }

  async registerNewUser(firstName, lastName, email, password) {
    await this.page.click(this.genderMale);
    await this.page.fill(this.firstName, firstName);
    await this.page.fill(this.lastName, lastName);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.fill(this.confirmPasswordInput, password);
    await this.page.click(this.registerButton);
  }

  async clickContinue() {
    await this.page.click(this.continueButton);
  }

  async getHeaderEmailText() {
    return await this.page.locator(this.headerEmail).innerText();
  }
}

module.exports = RegisterPage;
