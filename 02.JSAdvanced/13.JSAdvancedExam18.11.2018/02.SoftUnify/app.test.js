const SoftUniFy = require('./app');
const assert = require('chai').assert;

describe("SoftUniFy", function() {
    let softunitfy;
    beforeEach(function() {
        softunitfy = new SoftUniFy();
    });
    it("Should contain allSongs property that is initialized as an empty object.", function() {
        assert.isEmpty(softunitfy.allSongs);
    });
    describe("downloadSong(artist, song, lyrics) adds the given information to the allSongs ", function() {
        it("adds the passed in item (of any type) to the expenses.", function() {
            softunitfy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softunitfy.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            softunitfy.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

            assert.equal(softunitfy.allSongs, { Object('Eminem', ' Dub Fx') });
        });
    });
    describe("divideNums() ", function() {
        it("divides only the numbers from the expenses  and returns the result", function() {

        });
        it("empty arr", function() {

        });
        it("arr without numbers", function() {

        });
        it('division with zero', function() {

        });
    });
    describe("toString() ", function() {
        it("returns a string, containing a list of all items from the expenses, joined with an arrow", function() {

        });
        it("empty arr", function() {

        });
    });
    describe("orderBy()returns a string joined with comma which is the sorted expenses, sorting them by two criteria - one for numbers and another for mixed data.", function() {
        it("numbers", function() {

        });
        it("mixed", function() {

        });
        it("empty", function() {

        });
    });

});