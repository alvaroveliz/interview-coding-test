const FullCoverage = require('../src/products/FullCoverage');

const Product1 = new FullCoverage('Full Coverage', 2, 0);

test('Full coverage sellIn after 1 day to be 1', () => {
    Product1.updateValues();
    expect(Product1.sellIn).toBe(1);
});

test('Full coverage sellIn after 29 days to be -28', () => {
    for (i = 0; i < 29; i++) {
        Product1.updateValues();
    }

    expect(Product1.sellIn).toBe(-28);
});

const Product2 = new FullCoverage('Full Coverage', 2, 0);

test('Full coverage price after 1 day to be 1', () => {
    Product2.updateValues();

    expect(Product2.price).toBe(1);
});

test('Full coverage price after 29 days to be 50', () => {
    for (i = 0; i < 29; i++) {
        Product2.updateValues();
    }

    expect(Product2.price).toBe(50);
});

test('Full coverage price after 59 days to be 50', () => {
    for (i = 0; i < 59; i++) {
        Product2.updateValues();
    }

    expect(Product2.price).toBe(50);
});

const Product3 = new FullCoverage('Full Coverage', 0, 10);

test('Full coverage price after 1 day to be 12', () => {
    Product3.updateValues();

    expect(Product3.price).toBe(12);
});
