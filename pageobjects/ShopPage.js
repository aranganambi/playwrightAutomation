class ShopPage {
    constructor(page) {
        this.iphoneXHeading = page.getByRole('heading', { name: 'iphone X', exact: true });
    }
}

module.exports = { ShopPage };
