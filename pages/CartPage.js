class CartPage {
  constructor(page) {
    this.page = page;
    this.cartProductName = '.cart-item-row .product-name';
  }

  async open() {
    await this.page.click('li#topcartlink .ico-cart');
  }

  async getFirstProductName() {
    return await this.page.locator(this.cartProductName).innerText();
  }
}

module.exports = CartPage;
