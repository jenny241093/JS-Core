class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.firstName = firstName;
        this.email = email;
        this.lastName = lastName;
    }
    get clientId() {
        return this._clientId;
    }
    set clientId(clientId) {
        let lenghtValidation = clientId.length === 6;
        let numberValidation = Number.isInteger(Number(clientId));
        if (lenghtValidation && numberValidation) {
            this._clientId = clientId;

        } else {
            throw new TypeError('Client ID must be a 6-digit number');
        }

    }
    get email() {
        return this._email;
    }

    set email(email) {
        let emailRegex = /^[a-zA-Z0-9]+\@[a-zA-Z0-9\.]+$/;

        if (emailRegex.test(email)) {
            this._email = email;
            return email;
        }
        throw new TypeError("Invalid e-mail");
    }
    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        if (firstName.length < 3 || firstName.length > 20) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        let allowedCharactersRegex = /^[A-Za-z]+$/;
        if (!(allowedCharactersRegex.test(firstName))) {
            throw new TypeError("First name must contain only Latin characters");
        }

        this._firstName = firstName;
        return firstName;
    }
    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        if (lastName.length < 3 || lastName.length > 20) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }
        let allowedCharactersRegex = /^[A-Za-z]+$/;
        if (!(allowedCharactersRegex.test(lastName))) {
            throw new TypeError("Last name must contain only Latin characters");
        }

        this._lastName = lastName;
        return lastName;

    }
}