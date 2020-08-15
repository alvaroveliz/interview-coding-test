const CarInsurance = require('./src/CarInsurance');
const MediumCoverage = require('./src/products/MediumCoverage');
const FullCoverage = require('./src/products/FullCoverage');
const LowCoverage = require('./src/products/LowCoverage');
const MegaCoverage = require('./src/products/MegaCoverage');
const SpecialFullCoverage = require('./src/products/SpecialFullCoverage');
const SuperSale = require('./src/products/SuperSale');

const productsAtDayZero = [
    new MediumCoverage('Medium Coverage', 10, 20),
    new FullCoverage('Full Coverage', 2, 0),
    new LowCoverage('Low Coverage', 5, 7),
    new MegaCoverage('Mega Coverage', 0, 80),
    new MegaCoverage('Mega Coverage', -1, 80),
    new SpecialFullCoverage('Special Full Coverage', 15, 20),
    new SpecialFullCoverage('Special Full Coverage', 10, 49),
    new SpecialFullCoverage('Special Full Coverage', 5, 49),
    new SuperSale('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);

const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

console.log(`-------- day 0 --------`);
console.log('name, sellIn, price');
carInsurance.products.forEach(productPrinter);
console.log('');

for (let i = 1; i <= 29; i += 1) {
    console.log(`-------- day ${i} --------`);
    console.log('name, sellIn, price');
    carInsurance.updateValues();
    carInsurance.products.forEach(productPrinter);
    console.log('');
}
