const Warehouse = require('./08.Warehouse');
const { expect } = require("chai");

describe.only('Warehouse tests', function() {

    describe('describe if functions are attached to proto', function() {
        it('describe if functions are attached to proto', function() {
            expect(typeof Warehouse.prototype.addProduct === 'function').to.be.true;
            expect(typeof Warehouse.prototype.orderProducts === 'function').to.be.true;
            expect(typeof Warehouse.prototype.occupiedCapacity === 'function').to.be.true;
            expect(typeof Warehouse.prototype.revision === 'function').to.be.true;
            expect(typeof Warehouse.prototype.scrapeAProduct === 'function').to.be.true;

        });
    });
    describe('constructоr tests', function() {
        it('if it is initialized with 0 should trow an error Invalid given warehouse space', function() {

            const errorFUnc = () => {
                let warehouse = new Warehouse(0);
            }
            expect(errorFUnc).to.throw("Invalid given warehouse space");
        });
        it('if it is initialized with negative value should trow an error Invalid given warehouse space', function() {
            const errorFUnc = () => {
                let warehouse = new Warehouse(-1);
            }
            expect(errorFUnc).to.throw("Invalid given warehouse space");
        });
        it('if it is initialized with wrong param should trow an error Invalid given warehouse space', function() {
            const errorFUnc = () => {
                let warehouse = new Warehouse({});
            }
            expect(errorFUnc).to.throw("Invalid given warehouse space");
        });
        it('if it is initialized with correct param should have a list inside', function() {

            let warehouse = new Warehouse(2);
            let capacity = warehouse.capacity;
            let expected = 2;
            expect(capacity).to.be.equal(expected);
        });
    });
    describe('addProduct tests', function() {
        it('add products with incorrect values', function() {
            let warehouse = new Warehouse(5);
            expect(() => warehouse.addProduct('Food', 'sliva', 30)).to.throw('There is not enough space or the warehouse is already full');

        });
        it('add products with single product', function() {
            let warehouse = new Warehouse(30);
            warehouse.addProduct('Drink', 'sliva', 30);

            expect(() => warehouse.addProduct('Food', 'burger', 40)).to.throw('There is not enough space or the warehouse is already full');
        });

    });
});