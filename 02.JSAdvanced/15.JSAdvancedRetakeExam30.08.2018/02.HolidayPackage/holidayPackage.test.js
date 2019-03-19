const HolidayPackage = require('./holidayPackage');
const assert = require('chai').assert;

describe("HolidayPackage", function() {
    let holidayPackage;
    beforeEach(function() {
        holidayPackage = new HolidayPackage('Italy', 'Summer');
    });

    describe("makeMovie()", function() {
        it("should be false by default", function() {
            assert.equal(holidayPackage.insuranceIncluded, false);
        });
        it("should be boolean", function() {
            assert.throw(() => holidayPackage.insuranceIncluded = 'true', 'Insurance status must be a boolean');
        });

    });
    describe("addVacationer() ", function() {

        it("without any of the names", function() {
            assert.throw(() => holidayPackage.addVacationer('Petrov'), 'Name must consist of first name and last name');
        });
        it("with wrong params", function() {
            assert.throw(() => holidayPackage.addVacationer([1, 3, 5]), 'Vacationer name must be a non-empty string');
        });
        it("without empty string", function() {
            assert.throw(() => holidayPackage.addVacationer(' '), 'Vacationer name must be a non-empty string');
        });

    });
    describe("showVacationers() ", function() {


        it("without vacationers", function() {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');

            let result = 'Vacationers:\nIvan Ivanov\nPetar Petrov';
            assert.deepEqual(holidayPackage.showVacationers(), result)
        });
        it("without vacationers", function() {
            assert.deepEqual(holidayPackage.showVacationers(), 'No vacationers are added yet');
        });

    });
    describe("generateHolidayPackage() ", function() {
        it("without vacationer", function() {
            assert.throw(() => holidayPackage.generateHolidayPackage(), 'There must be at least 1 vacationer added');
        });
        it("without insurance  ", function() {
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            let result = 'Holiday Package Generated\nDestination: Italy\nVacationers:\nPetar Petrov\nGeorgi Georgiev\nPrice: 1000';
            assert.deepEqual(holidayPackage.generateHolidayPackage(), result);
        });
        it("with insurance  ", function() {
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            holidayPackage.insuranceIncluded = true;
            let result = 'Holiday Package Generated\nDestination: Italy\nVacationers:\nPetar Petrov\nGeorgi Georgiev\nPrice: 1100';
            assert.deepEqual(holidayPackage.generateHolidayPackage(), result);
        });
    });

});