const Product = require('../Product');

class FullCoverage extends Product {
    updatePrice() {
        if (this.price < 0) {
            this.price = 0;
        } else if (this.price >= 50) {
            this.price = 50;
        } else {
            let increase = 1;

            if (this.sellIn <= 0) {
                increase = 2;
            }

            this.price = this.price + increase;
        }
    }
}

module.exports = FullCoverage;
