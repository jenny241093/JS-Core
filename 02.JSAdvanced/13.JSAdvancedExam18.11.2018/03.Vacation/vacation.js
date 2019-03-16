class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
        this.numberOfChildren = 0;
        return this;
    }

    registerChild(name, grade, budget) {

        let output;

        if (budget >= this.budget) {

            if (!this.kids[grade]) {
                this.kids[grade] = [];
            }

            let isThisKidExist = this.kids[grade].filter(kN => kN.split('-')[0] === name);

            if (isThisKidExist.length === 0) {
                let kidNameMoney = `${name}-${budget}`;
                this.kids[grade].push(kidNameMoney);
                this.numberOfChildren++;
                output = this.kids[grade];
            } else {
                output = `${name} is already in the list for this ${this.destination} vacation.`
            }
        } else {
            output = `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }

        return output;
    }
    removeChild(name, grade) {

        let output;
        let isThisKidExist = this.kids[grade] ? this.kids[grade].filter(kN => kN.split('-')[0] === name) : 0;

        if (isThisKidExist.length === 1) {

            let kidIndex = this.kids[grade].indexOf(isThisKidExist[0]);

            this.kids[grade].splice(kidIndex, 1);
            this.numberOfChildren--;
            output = this.kids[grade];

        } else {
            output = `We couldn't find ${name} in ${grade} grade.`;
        }

        return output;
    }
    toString() {
        let output = '';
        if (this.numberOfChildren > 0) {
            output += `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}`
            Object.keys(this.kids).sort((prevG, currG) => prevG - currG).forEach((prevG, currG) => {
                if (this.kids[prevG].length > 0) {
                    output += `Grade: ${prevG}\n`;
                    let count = 1;
                    Object.keys(this.kids[prevG]).sort((prevN, currN) => prevN - currN).forEach((prevN, currN) => {
                        output += `${count++}. ${this.kids[prevG][prevN]}\n`
                    });
                    count = 1;
                }
            })
        } else {
            output += `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        return output;
    }

}
let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);

console.log(vacation.toString());