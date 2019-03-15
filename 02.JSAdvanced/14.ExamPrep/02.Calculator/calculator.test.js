const Calculator = require('./Calculator');
const assert = require('chai').assert;


describe("Calculator", function() {
    let calculator;
    beforeEach(function() {
        calculator = new Calculator();
    });
    it("Contains a property expenses that is initialized to an empty array", function() {
        assert.isArray(calculator.expenses);
        assert.isEmpty(calculator.expenses);
    });
    describe("Function add(data) ", function() {
        it("adds the passed in item (of any type) to the expenses.", function() {
            calculator.add(10);
            calculator.add("Pesho");
            calculator.add("5");
            calculator.add(true);
            assert.deepEqual(calculator.expenses, [10, 'Pesho', '5', true]);
        });
    });
    describe("divideNums() ", function() {
        it("divides only the numbers from the expenses  and returns the result", function() {
            calculator.add(10);
            calculator.add(5);
            calculator.add("5");
            calculator.add(true);
            assert.deepEqual(calculator.divideNums(), 2);
        });
        it("empty arr", function() {
            assert.throw(() => calculator.divideNums(), 'There are no numbers in the array!');
        });
        it("arr without numbers", function() {
            calculator.add("5");
            calculator.add(true);
            assert.throw(() => calculator.divideNums(), 'There are no numbers in the array!');
        });
        it('division with zero', function() {
            calculator.add(10.5);
            calculator.add(0);

            assert.equal(calculator.divideNums(), 'Cannot divide by zero');
        });
    });
    describe("toString() ", function() {
        it("returns a string, containing a list of all items from the expenses, joined with an arrow", function() {
            calculator.add(10);
            calculator.add("Pesho");
            calculator.add("5");

            assert.deepEqual(calculator.toString(), '10 -> Pesho -> 5');
        });
        it("empty arr", function() {
            assert.equal(calculator.toString(), 'empty array');
        });
    });
    describe("orderBy()returns a string joined with comma which is the sorted expenses, sorting them by two criteria - one for numbers and another for mixed data.", function() {
        it("numbers", function() {
            calculator.add(10);
            calculator.add(2);
            calculator.add(5);

            assert.deepEqual(calculator.orderBy(), '2, 5, 10');
        });
        it("mixed", function() {
            calculator.add(10);
            calculator.add('Gosho');
            calculator.add(2);
            calculator.add(5);
            assert.deepEqual(calculator.orderBy(), '10, 2, 5, Gosho');
        });
        it("empty", function() {
            assert.equal(calculator.orderBy(), 'empty');
        });
    });

});