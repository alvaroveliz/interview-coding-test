const Product = require('../Product');

class MegaCoverage extends Product {
    updatePrice() {
        this.price = 80;
    }

    updateSellIn() {
        this.sellIn = this.sellIn;
    }
}

module.exports = MegaCoverage;
