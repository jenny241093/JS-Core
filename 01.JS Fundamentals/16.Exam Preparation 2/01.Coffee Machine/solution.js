function solve(arr) {
    let obj = {
        'coffee': {
            'caffeine': 0.80,
            'decaf': 0.90,
            'Price': 0,
            'Change': 0
        },
        'tea': {
            'withoutMilk': 0.80,
            'Price': 0,
            'Change': 0
        },
        'income': 0,


    }
    let income = obj.income;
    arr.forEach((arr) => {
        let arrParams = arr.split(', ');
        let coins = +arrParams[0];
        let typeOfDrink = arrParams[1];

        if (typeOfDrink == 'coffee') {

            let price = obj[typeOfDrink].Price;
            let change = obj[typeOfDrink].Change;
            let typeOfCoffee = arrParams[2];
            price += obj[typeOfDrink][typeOfCoffee];

            if (arrParams.length > 4) {
                let sugar = arrParams[4];
                if (sugar > 0) {
                    price += 0.10;
                }
                price += 0.10;

            } else {
                let sugar = arrParams[3];
                if (sugar > 0) {
                    price += 0.10;
                }
            }
            change = coins - price;
            if (coins >= price) {
                income += price;
                console.log(`You ordered ${typeOfDrink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`)
            } else {
                let moneyNeeded = Math.abs(change);
                console.log(`Not enough money for ${typeOfDrink}. Need ${moneyNeeded.toFixed(2)}$ more.`);

            }

        } else {
            let price = obj[typeOfDrink].Price;
            let change = obj[typeOfDrink].Change;
            price += obj[typeOfDrink]['withoutMilk'];

            if (arrParams.length > 3) {
                let sugar = arrParams[3];
                if (sugar > 0) {
                    price += 0.10;
                }
                price += 0.10;

            } else {
                let sugar = arrParams[2];
                if (sugar > 0) {
                    price += 0.10;
                }
            }
            change = coins - price;
            if (coins >= price) {
                income += price;
                console.log(`You ordered ${typeOfDrink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`)
            } else {
                let moneyNeeded = Math.abs(change);
                console.log(`Not enough money for ${typeOfDrink}. Need ${moneyNeeded.toFixed(2)}$ more.`);

            }
        }


    })
    console.log(`Income Report: ${income.toFixed(2)}$`);

}
solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0'
])