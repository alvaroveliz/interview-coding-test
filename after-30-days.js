const CarInsurance = require('./classes/CarInsurance');
const MediumCoverage = require('./classes/products/MediumCoverage');
const FullCoverage = require('./classes/products/FullCoverage');
const LowCoverage = require('./classes/products/LowCoverage');
const MegaCoverage = require('./classes/products/MegaCoverage');
const SpecialFullCoverage = require('./classes/products/SpecialFullCoverage');
const SuperSale = require('./classes/products/SuperSale');

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

for (let i = 1; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    carInsurance.updatePrice().forEach(productPrinter);
    console.log('');
}
