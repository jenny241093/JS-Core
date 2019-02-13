function calculateKg(type,weight,pricePerkg) {

    let weightInKg = (weight/1000);
    let money = (weightInKg*pricePerkg);
    console.log(`I need ${money.toFixed(2)} leva to buy ${weightInKg.toFixed(2)} kilograms ${type}.`)
}
calculateKg('apple', 1563, 2.35);