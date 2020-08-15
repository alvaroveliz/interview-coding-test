const LowCoverage = require('../src/products/LowCoverage');

const Product1 = new LowCoverage('Low Coverage', 10, 20);

test('Low coverage sellIn after 1 day to be 9', () => {
    Product1.updateSellIn();
    expect(Product1.sellIn).toBe(9);
});

test('Low coverage sellIn after 29 days to be -20', () => {
    for (i = 0; i < 29; i++) {
        Product1.updateSellIn();
    }

    expect(Product1.sellIn).toBe(-20);
});

const Product2 = new LowCoverage('Low Coverage', 10, 20);

test('Low coverage price after 1 day to be 19', () => {
    Product2.updatePrice();

    expect(Product2.price).toBe(19);
});

test('Low coverage price after 29 days to be 0', () => {
    for (i = 0; i < 29; i++) {
        Product2.updatePrice();
    }

    expect(Product2.price).toBe(0);
});

const Product3 = new LowCoverage('Low Coverage', 0, 10);

test('Low coverage price after 1 day to be 8', () => {
    Product3.updateValues();

    expect(Product3.price).toBe(8);
});
