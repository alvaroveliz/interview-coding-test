const Product = require('../Product');

class SpecialFullCoverage extends Product {
    updatePrice() {
        if (this.sellIn < 1) {
            this.price = 0;
        } else {
            if (this.sellIn > 10) {
                this.price = this.price + 1;
            } else if (this.sellIn <= 10 && this.sellIn > 5) {
                this.price = this.price + 2;
            } else if (this.sellIn <= 5) {
                this.price = this.price + 3;
            }

            this.validatePrice();
        }
    }
}

module.exports = SpecialFullCoverage;
