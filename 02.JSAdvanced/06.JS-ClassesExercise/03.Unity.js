class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }
    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }
    getRats() {
        return this.unitedRats;
    }
    toString() {
        let output = `${this.name}\n`;
        for (const el of this.unitedRats) {
            output += `## ${el.name}\n`;
        }
        return output;
    }

}
let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho