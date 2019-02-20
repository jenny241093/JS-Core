const assert = require('chai').assert;
const lookupChar = require('./03.CharLookup');

describe('lookupChar', function() {
    it('return undefined if the first parameter is not a string or the second parameter is not an integer', function() {
        let str = 1;
        let index = 1;
        assert.equal(lookupChar(str, index), undefined);

    });
    it('return undefined if the first parameter is not a string or the second parameter is not an integer', function() {
        let str = 'test';
        let index = 'test';
        assert.equal(lookupChar(str, index), undefined);
    });
    it('with a float param should return undefined', function() {
        let str = 'test';
        let index = 2.3;
        assert.equal(lookupChar(str, index), undefined);
    });
    it(' should return undefined', function() {
        let str = 1;
        let index = 'test';
        assert.equal(lookupChar(str, index), undefined);
    });
    it('return incorrect index if the value of the index is incorrect (bigger than or equal to the string length or a negative number', function() {
        let str = 'test';
        let index = 5;

        assert.equal(lookupChar(str, index), 'Incorrect index');

    });
    it('return incorrect index if the value of the index is incorrect (bigger than or equal to the string length or a negative number', function() {
        let str = 'test';
        let index = 4;

        assert.equal(lookupChar(str, index), 'Incorrect index');

    });
    it('return incorrect index if the value of the index is incorrect (bigger than or equal to the string length or a negative number', function() {
        let str = 'test';
        let index = -1;
        assert.equal(lookupChar(str, index), 'Incorrect index');
    });
    it('If both parameters have correct types and values - return the character at the specified index in the string', function() {
        let str = 'test';
        let index = 0;


        assert.equal(lookupChar(str, index), 't');

    });
    it('If both parameters have correct types and values - return the character at the specified index in the string', function() {
        let str = 'test';
        let index = 1;


        assert.equal(lookupChar(str, index), 'e');

    });
});