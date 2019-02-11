function solve(info, print) {

    const regexName = /\s([A-Z{1,}a-z]+-[A-Z{1,}a-z]+.-[A-Z{1,}a-z]+)\s|\s([A-Z{1,}a-z]+-[A-Z{1,}a-z]+)\s/gm;
    const regexAirport = /\s([A-Z{3,}]+\/[A-Z{3,}]+)\s/gm;
    const regexFlight = /\s([A-Z{1,3}]+\d{1,5})\s/gm;
    const regexCompany = /-\s([A-Z][a-zA-Z]*\*[A-Z][a-zA-Z]*)\s/gm;

    let name = regexName.exec(info)[0].toString().trim().split('-').join(' ');
    let companyName = regexCompany.exec(info)[1].split('*').join(' ');
    let flightNumber = regexFlight.exec(info)[1];
    let arr = regexAirport.exec(info)[1].split('/');
    let fromAirport = arr[0];
    let toAirport = arr[1];

    if (print === 'name') {
        console.log(`Mr/Ms, ${name}, have a nice flight!`);

    } else if (print === 'company') {
        console.log(`Have a nice flight with ${companyName}.`);

    } else if (print === 'flight') {
        console.log(`Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`);

    } else {
        console.log(`Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${companyName}.`);

    }
}
solve(' P-P.-P travels from  AZS/WRQ  - Bag*S  W45N00   H0  from STD01:00 arriving at STA09:25', 'flight');