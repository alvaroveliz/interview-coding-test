const SpecialFullCoverage = require('../src/products/SpecialFullCoverage');

const Product1 = new SpecialFullCoverage('SpecialFull Coverage', 15, 20);

test('Special Full coverage sellIn after 1 day to be 14', () => {
    Product1.updateValues();
    expect(Product1.sellIn).toBe(14);
});

test('Special Full coverage sellIn after 29 days to be -15', () => {
    for (i = 0; i < 29; i++) {
        Product1.updateValues();
    }

    expect(Product1.sellIn).toBe(-15);
});

const Product2 = new SpecialFullCoverage('Special Full Coverage', 15, 20);

test('Special Full coverage price after 1 day to be 21', () => {
    Product2.updateValues();

    expect(Product2.price).toBe(21);
});

test('Special Full coverage price after 5 more days to be 28', () => {
    for (i = 0; i < 5; i++) {
        Product2.updateValues();
    }

    expect(Product2.price).toBe(28);
});

test('Special Full coverage price after 2 more days to be 32', () => {
    for (i = 0; i < 2; i++) {
        Product2.updateValues();
    }

    expect(Product2.price).toBe(32);
});

test('Special Full coverage price after 10 more days to be 0', () => {
    for (i = 0; i < 10; i++) {
        Product2.updateValues();
    }

    expect(Product2.price).toBe(0);
});

const Product3 = new SpecialFullCoverage('Special Full Coverage', -2, 20);

test('Special Full coverage price after 1 days to be 0', () => {
    Product3.updateValues();

    expect(Product3.price).toBe(0);
});
