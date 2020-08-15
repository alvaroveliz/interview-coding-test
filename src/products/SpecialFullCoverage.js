const Product = require('../Product');

class SpecialFullCoverage extends Product {
    updatePrice() {
        if (this.price < 0) {
            this.price = 0;
        } else if (this.price >= 50) {
            this.price = 50;
        } else if (this.sellIn < 1) {
            this.price = 0;
        } else {
            if (this.sellIn > 10) {
                this.price = this.price + 1;
            } else if (this.sellIn <= 10 && this.sellIn > 5) {
                this.price = this.price + 2;
            } else if (this.sellIn <= 5) {
                this.price = this.price + 3;
            }
        }
    }
}

module.exports = SpecialFullCoverage;
