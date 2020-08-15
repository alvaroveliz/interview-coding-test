const SuperSale = require('../src/products/SuperSale');

const Product1 = new SuperSale('Super Sale', 3, 6);

test('Super Sale sellIn after 1 day to be 2', () => {
    Product1.updateValues();
    expect(Product1.sellIn).toBe(2);
});

test('Super Sale sellIn after 29 days to be -27', () => {
    for (i = 0; i < 29; i++) {
        Product1.updateValues();
    }

    expect(Product1.sellIn).toBe(-27);
});

const Product2 = new SuperSale('Super Sale', 3, 6);

test('Super Sale price after 1 day to be 4', () => {
    Product2.updateValues();

    expect(Product2.price).toBe(4);
});

test('Super Sale price after 29 days to be 0', () => {
    for (i = 0; i < 29; i++) {
        Product2.updateValues();
    }

    expect(Product2.price).toBe(0);
});

const Product3 = new SuperSale('Super Sale', 0, 10);

test('Super Sale price after 1 day to be 8', () => {
    Product3.updateValues();

    expect(Product3.price).toBe(8);
});
