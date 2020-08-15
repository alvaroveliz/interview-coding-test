const Product = require('../Product');

class SuperSale extends Product {
    updatePrice() {
        if (this.price < 1) {
            this.price = 0;
        } else if (this.price > 50) {
            this.price = 50;
        } else {
            this.price = this.price - 2;
        }
    }
}

module.exports = SuperSale;
