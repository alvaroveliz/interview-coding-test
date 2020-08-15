const Product = require('../Product');

class FullCoverage extends Product {
    updatePrice() {
        let increase = 1;

        if (this.sellIn < 0) {
            increase = 2;
        }

        this.price = this.price + increase;

        this.validatePrice();
    }
}

module.exports = FullCoverage;
