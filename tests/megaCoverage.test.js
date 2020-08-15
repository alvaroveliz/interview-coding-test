const MegaCoverage = require('../src/products/MegaCoverage');

const Product1 = new MegaCoverage('Mega Coverage', 10, 20);

test('Mega coverage sellIn after 1 day to be 10', () => {
    Product1.updateSellIn();
    expect(Product1.sellIn).toBe(10);
});

test('Mega coverage sellIn after 29 days to be 10', () => {
    for (i = 0; i < 29; i++) {
        Product1.updateSellIn();
    }

    expect(Product1.sellIn).toBe(10);
});

const Product2 = new MegaCoverage('Mega Coverage', 10, 20);

test('Mega coverage price after 1 day to be 80', () => {
    Product2.updatePrice();

    expect(Product2.price).toBe(80);
});

test('Mega coverage price after 29 days to be 80', () => {
    for (i = 0; i < 29; i++) {
        Product2.updatePrice();
    }

    expect(Product2.price).toBe(80);
});

const Product3 = new MegaCoverage('Mega Coverage', 0, 10);

test('Mega coverage price after 1 day to be 80', () => {
    Product3.updateValues();

    expect(Product3.price).toBe(80);
});
