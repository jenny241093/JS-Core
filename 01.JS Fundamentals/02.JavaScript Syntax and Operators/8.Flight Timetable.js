function flightTable(arr) {
    let arrDep = arr[0];
    let town = arr[1];
    let time = arr[2];
    let flightNum = arr[3];
    let gateNum = arr[4];
    console.log(`${arrDep}: Destination - ${town}, Flight - ${flightNum}, Time - ${time}, Gate - ${gateNum}`);
}
flightTable(['Arrivals', 'Paris', '02:22', 'VD17', '3']);