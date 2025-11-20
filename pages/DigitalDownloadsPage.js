const { expect } = require('@playwright/test');

class DigitalDownloadsPage {
  constructor(page) {
    this.page = page;
    this.productsLocator = '.item-box';
  }

  async open() {
    await this.page.click('text=DIGITAL DOWNLOADS');
  }

  async selectRandomProductAndAddToCart() {
    const products = this.page.locator(this.productsLocator);
    const count = await products.count();

    if (count === 0) {
      throw new Error('No digital products found on the page');
    }

    const randomIndex = Math.floor(Math.random() * count);
    const selectedProduct = products.nth(randomIndex);
    const productName = (await selectedProduct.locator('.product-title a').innerText()).trim();

    await selectedProduct.locator('input[value="Add to cart"]').click();

    await expect(this.page.locator('.bar-notification.success')).toBeVisible();
    await expect(this.page.locator('.bar-notification.success')).toBeHidden();

    return productName;
  }
}

module.exports = DigitalDownloadsPage;
