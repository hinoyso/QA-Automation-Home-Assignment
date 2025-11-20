const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');
const DigitalDownloadsPage = require('../pages/DigitalDownloadsPage');
const CartPage = require('../pages/CartPage');

test('User can register and add a random digital product to the cart', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const downloadsPage = new DigitalDownloadsPage(page);
  const cartPage = new CartPage(page);

  const email = `hinoy${Date.now()}@example.com`;
  const password = 'P@ssword123!';

  await registerPage.goto();
  await registerPage.registerNewUser('Hinoy', 'Solomon', email, password);
  await registerPage.clickContinue();

  const headerEmail = await registerPage.getHeaderEmailText();
  await expect(headerEmail).toBe(email);

  await downloadsPage.open();
  const selectedProductName = await downloadsPage.selectRandomProductAndAddToCart();
  await cartPage.open();
  const cartProductName = await cartPage.getFirstProductName();

  await expect(cartProductName).toBe(selectedProductName);
});
