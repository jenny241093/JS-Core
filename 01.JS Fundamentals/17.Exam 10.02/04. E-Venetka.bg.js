function app(input) {
    let towns = Object.values(groupCarsByTown(input));
    towns.sort((a, b) => {
        const resultByTotalPrice = b["totalPrice"] - a["totalPrice"];
        if (resultByTotalPrice !== 0) {
            return resultByTotalPrice;
        }

        return a["name"].localeCompare(b["name"]);
    });

    modelsOfTheFirstTown = towns[0]["models"];
    let mostDrivenModels = Object.values(
        groupCarsMostDriven(modelsOfTheFirstTown)
    );
    mostDrivenModels.sort((a, b) => {
        const resultByCount = b["count"] - a["count"];
        if (resultByCount !== 0) {
            return resultByCount;
        }

        const resultByPrice = b["price"] - a["price"];
        if (resultByPrice !== 0) {
            return resultByPrice;
        }

        return a["name"].localeCompare(b["name"]);
    });


    console.log(`${towns[0].name} is most profitable - ${towns[0].totalPrice} BGN`);
    console.log(`Most driven model: ${mostDrivenModels[0].name}`);
    let regNumbers = towns[0][mostDrivenModels[0].name].regNumber;
    console.log(regNumbers);

    console.log(`${towns[0].name}:`);
    console.log(`Varna: A3423SM, B1234SM`);


    function groupCarsByTown(cars) {
        let towns = [];
        cars.forEach(car => {
            if (!towns[car.town]) {
                towns[car.town] = {};
                towns[car.town]["name"] = car.town;
                towns[car.town]["models"] = [];
                towns[car.town]["totalPrice"] = 0;
            }

            towns[car.town]["models"].push(car);
            towns[car.town]["totalPrice"] += car["price"];
        });

        return towns;
    }

    function groupCarsMostDriven(inputCars) {
        let cars = [];
        inputCars.forEach(car => {
            if (!cars[car.model]) {
                cars[car.model] = {};
                cars[car.model]["name"] = car.model;
                cars[car.model]["price"] = car.price;
                cars[car.model]["count"] = 0;
            }

            cars[car.model]["count"]++;
        });

        return cars;
    }
}

app([{ model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2 },
    { model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8 },
    { model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9 },
    { model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3 },
    { model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3 }
]);