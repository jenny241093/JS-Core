const assert = require('chai').assert;
const expect = require('chai').expect;
const mathEnforcer = require('./04.Math Enforcer');


describe('mathEnforcer', function() {

    describe('addFive', function() {
        it('with a non-number parameter, should return correct result', function() {
            let input = 'f';
            let result = mathEnforcer.addFive(input);
            assert.equal(result, undefined);
        });

        it('with five will return 10 ', function() {
            let input = 5;
            let result = mathEnforcer.addFive(input);
            assert.equal(result, 10);
        });
        it('with five will return 0 ', function() {
            let input = -5;
            let result = mathEnforcer.addFive(input);
            assert.equal(result, 0);
        });
        it('with floating  will return within 0.01 of the correct value ', function() {
            let input = 3.14;
            let result = mathEnforcer.addFive(input);
            assert.equal(result, 8.14);
        });
    });

    describe('subtractTen', function() {
        it('with a non-number parameter, should return correct result', function() {
            let input = 'f';
            let result = mathEnforcer.subtractTen(input);
            assert.equal(result, undefined);
        });
        it('with five will return 10 ', function() {
            let input = 20;
            let result = mathEnforcer.subtractTen(input);
            assert.equal(result, 10);
        });
        it('with five will return 0 ', function() {
            let input = -5;
            let result = mathEnforcer.subtractTen(input);
            assert.equal(result, -15);
        });
        it('with floating  will return within 0.01 of the correct value ', function() {
            let input = 10.01;
            let result = mathEnforcer.subtractTen(input);
            expect(result).to.be.closeTo(0.1, 0.1);
        });
        it('with floating  will return within 0.01 of the correct value ', function() {
            let input = 20.50;
            let result = mathEnforcer.subtractTen(input);
            expect(result).to.be.closeTo(10.50, 0.1);
        });
    });
    describe('sum', function() {
        it('with a non-number parameter, should return correct result', function() {
            let input = 'f';
            let result = mathEnforcer.sum(input);
            assert.equal(result, undefined);
        });
        it(' will return 10 ', function() {
            let num1 = 5;
            let num2 = 5;
            let result = mathEnforcer.sum(num1, num2);
            assert.equal(result, 10);
        });
        it(' will return 7.5 ', function() {
            let num1 = 2.5;
            let num2 = 5;
            let result = mathEnforcer.sum(num1, num2);
            assert.equal(result, 7.5);
        });
        it('with floating  will return within 0.01 of the correct value ', function() {
            let num1 = 3;
            let num2 = 5.2;
            let result = mathEnforcer.sum(num1, num2);
            assert.equal(result, 8.2);
        });
        it('return 0 ', function() {
            let num1 = 2;
            let num2 = -2;
            let result = mathEnforcer.sum(num1, num2);
            assert.equal(result, 0);
        });
        it('return negative value ', function() {
            let num1 = -2.5;
            let num2 = -2;
            let result = mathEnforcer.sum(num1, num2);
            assert.equal(result, -4.5);
        });
    });
});