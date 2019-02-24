class Stringer {
    constructor(string, length) {
        this.string = string;
        this.innerString = string;
        this.innerLength = length;
    }

    get innerLength() {
        return this._innerLength;
    }
    set innerLength(innerLength) {
        let lenghtValidation = innerLength >= 0;
        let numberValidation = Number.isInteger(Number(innerLength));
        if (lenghtValidation && numberValidation) {
            this._innerLength = innerLength;

        } else if (innerLength < 0 && numberValidation) {
            this._innerLength = 0;
        }

    }
    get innerString() {
        return this._innerString;
    }
    set innerString(innerString) {
        this._innerString = innerString;

    }
    increase(number) {
        return this._innerLength += +number;
    }
    decrease(number) {

        this._innerLength -= +number;
        if (this._innerLength < 0) {
            this._innerLength = 0;
        }
    }
    toString() {
        if (this.string.length > this._innerLength) {
            return this._innerString = this._innerString.substring(0, this._innerLength) + '...';
        } else if (this._innerLength === 0) {
            return '...';
        } else {
            return this.string;
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...
test.decrease(5);
console.log(test.toString()); //...
test.increase(4);
console.log(test.toString()); //Test