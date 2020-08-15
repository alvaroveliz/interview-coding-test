const Product = require('../Product');

class SuperSale extends Product {
    updatePrice() {
        this.price = this.price - 2;

        this.validatePrice();
    }
}

module.exports = SuperSale;
