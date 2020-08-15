class CarInsurance {
    constructor(products = []) {
        this.products = products;
    }

    updateValues() {
        this.products.forEach((product) => {
            product.updateValues();
        });
    }
}

module.exports = CarInsurance;
