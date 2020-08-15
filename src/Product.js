class Product {
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }

    updatePrice() {
        let decrease = 1;

        if (this.sellIn < 0) {
            decrease = 2;
        }

        this.price = this.price - decrease;

        this.validatePrice();
    }

    updateSellIn() {
        this.sellIn = this.sellIn - 1;
    }

    updateValues() {
        this.updateSellIn();
        this.updatePrice();
    }

    validatePrice() {
        if (this.price < 1) {
            this.price = 0;
        }

        if (this.price > 50) {
            this.price = 50;
        }
    }
}

module.exports = Product;
